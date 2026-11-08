#!/usr/bin/env python3
"""
Script chấm điểm tự động đa bài tập (Lý thuyết + Thực hành)
và cập nhật vào Bảng Điểm:
- Mỗi TUẦN là 1 HÀNG (Dòng 2: Tuần 01, Dòng 3: Tuần 02...)
- Các CỘT là TÊN THÀNH VIÊN (Username (LT), Username (TH))
"""

import os
import sys
import json
import glob
import subprocess
from datetime import datetime, timezone, timedelta

def get_vietnam_time():
    tz_vn = timezone(timedelta(hours=7))
    return datetime.now(tz_vn).strftime("%d/%m/%Y %H:%M:%S")

def grade_theory(week_folder, week_name):
    """Chấm điểm bài tập lý thuyết dựa vào file tra-loi.json và key đáp án"""
    answer_file = os.path.join(week_folder, "ly-thuyet", "tra-loi.json")
    key_file = os.path.join(".github", "keys", f"{week_name}.json")

    if not os.path.exists(answer_file) or not os.path.exists(key_file):
        return None, "Chưa có đề hoặc đáp án"

    try:
        with open(answer_file, "r", encoding="utf-8") as f:
            student_answers = json.load(f)
        with open(key_file, "r", encoding="utf-8") as f:
            correct_keys = json.load(f)
    except Exception as e:
        return 0, f"Lỗi đọc JSON: {e}"

    total_questions = len(correct_keys)
    if total_questions == 0:
        return None, "Không có câu hỏi"

    correct_count = 0
    has_any_answer = False
    for q_id, correct_ans in correct_keys.items():
        stu_ans = str(student_answers.get(q_id, "")).strip().upper()
        if stu_ans:
            has_any_answer = True
        if stu_ans and stu_ans == str(correct_ans).strip().upper():
            correct_count += 1

    if not has_any_answer:
        return None, "Chưa làm lý thuyết"

    score = round((correct_count / total_questions) * 100)
    return score, f"{correct_count}/{total_questions} câu đúng ({score}/100)"

def grade_practice(week_folder):
    """Chấm điểm bài tập thực hành bằng node --test"""
    test_files = glob.glob(os.path.join(week_folder, "thuc-hanh", "test", "*.test.js"))
    if not test_files:
        return None, "Không có file test"

    cmd = ["node", "--test"] + test_files
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

    if res.returncode == 0:
        return 100, "Đạt 100% (Pass toàn bộ test)"
    else:
        return 0, "Chưa đạt (Có test bị lỗi)"

def main():
    sa_key_str = os.environ.get("GCP_SA_KEY")
    if not sa_key_str:
        print("[ERROR] Missing GCP_SA_KEY environment variable.", file=sys.stderr)
        sys.exit(1)

    try:
        sa_credentials = json.loads(sa_key_str)
    except Exception as e:
        print(f"[ERROR] Invalid JSON in GCP_SA_KEY: {e}", file=sys.stderr)
        sys.exit(1)

    student_username = os.environ.get("STUDENT_USERNAME", "unknown_user").strip()
    commit_url = os.environ.get("COMMIT_URL", "")
    spreadsheet_id = os.environ.get("SPREADSHEET_ID", "1-oSqRicyEM3NKcq5mvrwalWFJukSv_F0BxTx5wBqG5c")
    sheet_name = os.environ.get("SHEET_NAME", "bang diem")
    submit_time = get_vietnam_time()

    try:
        import gspread
        from google.oauth2.service_account import Credentials
    except ImportError:
        print("[ERROR] gspread or google-auth not installed.", file=sys.stderr)
        sys.exit(1)

    # 1. Quét toàn bộ bài tập trong assignments/week-*
    week_folders = sorted(glob.glob("assignments/week-*"))
    if not week_folders:
        print("Không tìm thấy bài tập nào trong assignments/week-*")
        sys.exit(0)

    results = {}
    report_lines = []

    print(f"=== Bắt đầu chấm bài cho học viên: @{student_username} ===")
    for wf in week_folders:
        week_name = os.path.basename(wf)
        try:
            week_num = int(week_name.replace("week-", ""))
        except ValueError:
            continue

        score_lt, detail_lt = grade_theory(wf, week_name)
        score_th, detail_th = grade_practice(wf)

        results[week_num] = {
            "week_name": week_name,
            "score_lt": score_lt,
            "detail_lt": detail_lt,
            "score_th": score_th,
            "detail_th": detail_th
        }

        print(f"\n--- {week_name.upper()} ---")
        print(f"  Lý thuyết: {detail_lt} => Điểm: {score_lt}")
        print(f"  Thực hành: {detail_th} => Điểm: {score_th}")

        report_lines.append(f"#### 📌 **Tuần {week_num:02d}**:")
        report_lines.append(f"- 📚 **Lý thuyết**: `{score_lt}` ({detail_lt})")
        report_lines.append(f"- 💻 **Thực hành**: `{score_th}` ({detail_th})")

    # 2. Kết nối Google Sheet
    print("\nConnecting to Google Sheet...")
    scopes = ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"]
    creds = Credentials.from_service_account_info(sa_credentials, scopes=scopes)
    gc = gspread.authorize(creds)
    sh = gc.open_by_key(spreadsheet_id)
    ws = sh.worksheet(sheet_name)

    headers = [h.strip() for h in ws.row_values(1)]
    weeks_col = [w.strip() for w in ws.col_values(1)]

    # 3. Tìm cột của học viên trong Row 1
    col_lt_name = f"{student_username} (LT)"
    col_th_name = f"{student_username} (TH)"

    col_lt_idx = None
    col_th_idx = None

    for idx, h in enumerate(headers, start=1):
        if h.lower() == col_lt_name.lower():
            col_lt_idx = idx
        elif h.lower() == col_th_name.lower():
            col_th_idx = idx

    # Nếu chưa có cột cho học viên này, tự động thêm 2 cột vào cuối Row 1
    if not col_lt_idx or not col_th_idx:
        new_col_start = len(headers) + 1
        ws.update_cell(1, new_col_start, col_lt_name)
        ws.update_cell(1, new_col_start + 1, col_th_name)
        col_lt_idx = new_col_start
        col_th_idx = new_col_start + 1
        headers.extend([col_lt_name, col_th_name])
        print(f"Đã tự động thêm cột cho học viên: Cột {col_lt_idx} ({col_lt_name}), Cột {col_th_idx} ({col_th_name})")

    # 4. Tìm dòng của từng tuần và cập nhật điểm
    updates = []
    for week_num, res in results.items():
        week_tag = f"Tuần {week_num:02d}"
        target_row = None
        for r_idx, w_text in enumerate(weeks_col, start=1):
            if w_text.startswith(week_tag):
                target_row = r_idx
                break

        if not target_row:
            print(f"[WARN] Không tìm thấy dòng cho '{week_tag}' trong cột A.")
            continue

        if res["score_lt"] is not None:
            updates.append({
                "range": gspread.utils.rowcol_to_a1(target_row, col_lt_idx),
                "values": [[str(res["score_lt"])]]
            })

        if res["score_th"] is not None:
            updates.append({
                "range": gspread.utils.rowcol_to_a1(target_row, col_th_idx),
                "values": [[str(res["score_th"])]]
            })

    if updates:
        ws.batch_update(updates)
        print(f"Đã cập nhật thành công {len(updates)} ô điểm số lên Google Sheet!")

    # 5. Xuất summary markdown cho PR comment
    summary_md = f"### 🤖 Kết quả chấm bài tự động - @{student_username}\n\n" + \
                 "\n".join(report_lines) + \
                 f"\n\n- 🕒 **Thời gian cập nhật**: {submit_time}\n" + \
                 f"- 📊 **Bảng điểm**: Đã cập nhật vào dòng tương ứng trên Google Sheet."

    with open("grading_summary.md", "w", encoding="utf-8") as f:
        f.write(summary_md)

    print("\nChấm bài hoàn tất!")

if __name__ == "__main__":
    main()
