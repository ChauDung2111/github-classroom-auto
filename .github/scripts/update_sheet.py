#!/usr/bin/env python3
"""
Script cập nhật kết quả tự động vào Google Sheet từ GitHub Actions.
Tương thích với tab 'bang diem':
- Cột A: usrname
- Cột B: điểm 
- Cột C: tg nộp 
- Cột D: trạng thái
- Cột E: link bài làm
"""

import os
import sys
import json
from datetime import datetime, timezone, timedelta

def get_vietnam_time():
    # GMT+7 timezone
    tz_vn = timezone(timedelta(hours=7))
    return datetime.now(tz_vn).strftime("%d/%m/%Y %H:%M:%S")

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
    score = os.environ.get("SCORE", "0")
    status = os.environ.get("STATUS", "Đã nộp")
    commit_url = os.environ.get("COMMIT_URL", "")
    submit_time = get_vietnam_time()

    spreadsheet_id = os.environ.get("SPREADSHEET_ID", "1-oSqRicyEM3NKcq5mvrwalWFJukSv_F0BxTx5wBqG5c")
    sheet_name = os.environ.get("SHEET_NAME", "bang diem")

    try:
        import gspread
        from google.oauth2.service_account import Credentials
    except ImportError:
        print("[ERROR] gspread or google-auth not installed.", file=sys.stderr)
        sys.exit(1)

    scopes = [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive"
    ]

    print(f"Connecting to Google Sheets...")
    creds = Credentials.from_service_account_info(sa_credentials, scopes=scopes)
    gc = gspread.authorize(creds)

    try:
        sh = gc.open_by_key(spreadsheet_id)
        worksheet = sh.worksheet(sheet_name)
    except Exception as e:
        print(f"[ERROR] Could not open spreadsheet '{spreadsheet_id}' / tab '{sheet_name}': {e}", file=sys.stderr)
        sys.exit(1)

    print(f"Connected to sheet: '{sh.title}', tab: '{worksheet.title}'")

    usernames = worksheet.col_values(1)

    row_data = [
        student_username,
        str(score),
        submit_time,
        status,
        commit_url
    ]

    target_row = None
    for idx, user in enumerate(usernames[1:], start=2):
        if user.strip().lower() == student_username.lower():
            target_row = idx
            break

    if target_row:
        print(f"Found existing record for '{student_username}' at row {target_row}. Updating...")
        worksheet.update(values=[row_data], range_name=f"A{target_row}:E{target_row}")
        print(f"Successfully updated row {target_row}!")
    else:
        print(f"No existing record found for '{student_username}'. Appending new row...")
        worksheet.append_row(row_data)
        print(f"Successfully added new row!")

    print(f"Done. Result: {row_data}")

if __name__ == "__main__":
    main()
