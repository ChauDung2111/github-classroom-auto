# 🚀 Lộ Trình Backend Node.js - Hệ Thống Chấm Điểm Tự Động

Chào mừng các bạn đến với kho lưu trữ bài tập thực hành theo lộ trình Backend Node.js! Hệ thống được tích hợp **chấm điểm tự động và cập nhật trực tiếp lên Google Sheet theo từng tuần**.

---

## 📂 Cấu trúc bài tập

```text
assignments/
├── week-01/
│   ├── ly-thuyet/
│   │   ├── DE_BAI.md            # Câu hỏi trắc nghiệm lý thuyết
│   │   └── tra-loi.json         # Điền đáp án của bạn (A, B, C, D)
│   └── thuc-hanh/
│       ├── index.js             # Code làm bài thực hành
│       └── test/index.test.js   # Bộ test kiểm tra code
│
├── week-02/
│   ├── ly-thuyet/
│   └── thuc-hanh/
└── ... (các tuần tiếp theo)
```

---

## 📌 Hướng dẫn làm và nộp bài

### Bước 1: Fork repository này về tài khoản GitHub của bạn
- Bấm vào nút **Fork** ở góc trên bên phải.

### Bước 2: Clone về máy
```bash
git clone https://github.com/your-username/github-classroom-auto.git
cd github-classroom-auto
```

### Bước 3: Làm bài tập
1. **Lý thuyết**: Đọc file `assignments/week-XX/ly-thuyet/DE_BAI.md` và điền đáp án vào `tra-loi.json`.
2. **Thực hành**: Mở file `assignments/week-XX/thuc-hanh/index.js` và hoàn thành các hàm.

### Bước 4: Chạy test kiểm tra trên máy
```bash
# Chạy test kiểm tra code thực hành
node --test assignments/week-01/thuc-hanh/test/*.test.js
```

### Bước 5: Nộp bài bằng Pull Request (PR)
1. Commit và push code lên GitHub cá nhân của bạn:
   ```bash
   git add .
   git commit -m "Nộp bài Tuần 01"
   git push origin main
   ```
2. Vào GitHub repo của bạn, bấm **Contribute > Open pull request** > Bấm **Create pull request**.

### 🎉 Kết quả:
- Bot GitHub Actions sẽ tự động chấm cả **Lý thuyết** lẫn **Thực hành**.
- Điểm số sẽ được **ghi thẳng vào đúng hàng của Tuần đó và cột của Bạn** trên Bảng Điểm Google Sheet!
- Bot tự động phản hồi kết quả chi tiết ngay dưới Pull Request của bạn.
