# 📚 BÀI TẬP LÝ THUYẾT: TUẦN 01
**Chủ đề:** JavaScript ES6+ (let/const/var, Scope, Hoisting, Arrow Functions, Template Literals)

---

### Hướng dẫn làm bài:
Đọc các câu hỏi dưới đây và điền đáp án bạn chọn (A, B, C hoặc D) vào file `tra-loi.json` cùng thư mục.

---

#### Câu 1: Khác biệt cốt lõi giữa `const` và `let` trong JavaScript là gì?
- **A.** `const` có function scope, `let` có block scope.
- **B.** Biến khai báo bằng `const` không thể gán lại giá trị (re-assign), còn `let` thì có thể.
- **C.** `const` được hoisted còn `let` thì không.
- **D.** `const` chỉ dùng cho số nguyên, `let` dùng cho mọi kiểu dữ liệu.

---

#### Câu 2: Khái niệm "Temporal Dead Zone" (TDZ) liên quan đến điều gì?
- **A.** Khoảng thời gian từ khi vào block scope cho đến khi dòng khai báo `let`/`const` được thực thi, truy cập biến trong vùng này sẽ báo lỗi `ReferenceError`.
- **B.** Thời gian chờ khi gọi API bất đồng bộ.
- **C.** Vùng nhớ bị rò rỉ (memory leak) do hàm closure gây ra.
- **D.** Quá trình Garbage Collection dọn dẹp các biến không còn sử dụng.

---

#### Câu 3: Điểm khác biệt quan trọng nhất về từ khóa `this` giữa Arrow Function và hàm thông thường (Regular Function) là gì?
- **A.** Arrow function có từ khóa `this` trỏ về `undefined` trong mọi trường hợp.
- **B.** Arrow function tạo ra một `this` riêng khi được gọi dưới dạng method của object.
- **C.** Arrow function không có `this` riêng mà kế thừa (lexical scoping) `this` từ phạm vi cha bao quanh nó.
- **D.** Không có khác biệt nào về `this`.

---

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

---

#### Câu 5: Tính năng Template Literals trong ES6 sử dụng ký tự nào để bao bọc chuỗi?
- **A.** Dấu nháy đơn (`'`)
- **B.** Dấu nháy kép (`"`)
- **C.** Dấu ngoặc kép đặc biệt (`« »`)
- **D.** Dấu backtick (`` ` ``)
