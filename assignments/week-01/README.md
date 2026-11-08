# 📌 TUẦN 01: JAVASCRIPT ES6+ NỀN TẢNG

Chào mừng bạn đến với bài tập Tuần 01! Tuần này gồm 2 phần: **Lý thuyết** và **Thực hành**.

---

## 📚 PHẦN 1: BÀI TẬP LÝ THUYẾT
👉 **Cách làm**: Đọc 5 câu hỏi dưới đây và điền đáp án bạn chọn (`"A"`, `"B"`, `"C"` hoặc `"D"`) vào file **`quiz.json`** ngay trong thư mục này.

#### Câu 1: Khác biệt cốt lõi giữa `const` và `let` trong JavaScript là gì?
- **A.** `const` có function scope, `let` có block scope.
- **B.** Biến khai báo bằng `const` không thể gán lại giá trị (re-assign), còn `let` thì có thể.
- **C.** `const` được hoisted còn `let` thì không.
- **D.** `const` chỉ dùng cho số nguyên, `let` dùng cho mọi kiểu dữ liệu.

#### Câu 2: Khái niệm "Temporal Dead Zone" (TDZ) liên quan đến điều gì?
- **A.** Khoảng thời gian từ khi vào block scope cho đến khi dòng khai báo `let`/`const` được thực thi.
- **B.** Thời gian chờ khi gọi API bất đồng bộ.
- **C.** Vùng nhớ bị rò rỉ (memory leak) do hàm closure gây ra.
- **D.** Quá trình Garbage Collection dọn dẹp biến.

#### Câu 3: Điểm khác biệt quan trọng nhất về từ khóa `this` giữa Arrow Function và Regular Function là gì?
- **A.** Arrow function có `this` trỏ về `undefined` trong mọi trường hợp.
- **B.** Arrow function tạo ra một `this` riêng khi được gọi.
- **C.** Arrow function không có `this` riêng mà kế thừa (lexical scope) `this` từ phạm vi cha bao quanh.
- **D.** Không có khác biệt nào.

#### Câu 4: Đoạn mã sau in ra kết quả gì?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
- **A.** `0 1 2`
- **B.** `3 3 3`
- **C.** `undefined undefined undefined`
- **D.** `0 0 0`

#### Câu 5: Tính năng Template Literals trong ES6 sử dụng ký tự nào để bao bọc chuỗi?
- **A.** Dấu nháy đơn (`'`)
- **B.** Dấu nháy kép (`"`)
- **C.** Dấu ngoặc kép đặc biệt (`« »`)
- **D.** Dấu backtick (`` ` ``)

---

## 💻 PHẦN 2: BÀI TẬP THỰC HÀNH
👉 **Cách làm**: Mở file **`index.js`** trong thư mục này và hoàn thành 3 hàm:
1. `square(x)`: Tính bình phương của số `x`.
2. `formatUserInfo(name, age, job)`: Trả về chuỗi `"Xin chào, tôi là [name], [age] tuổi, làm nghề [job]."`.
3. `filterGreaterThan(numbers, threshold)`: Lọc ra các số lớn hơn `threshold`.

👉 **Kiểm tra bài làm**:
```bash
npm run test:w1
# Hoặc: node --test assignments/week-01/index.test.js
```
