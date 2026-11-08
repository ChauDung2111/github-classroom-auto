# 📌 TUẦN 02: DESTRUCTURING, REST/SPREAD, OPTIONAL CHAINING

Chào mừng bạn đến với bài tập Tuần 02! Tuần này gồm 2 phần: **Lý thuyết** và **Thực hành**.

---

## 📚 PHẦN 1: BÀI TẬP LÝ THUYẾT
👉 **Cách làm**: Đọc 3 câu hỏi dưới đây và điền đáp án bạn chọn (`"A"`, `"B"`, `"C"` hoặc `"D"`) vào file **`quiz.json`** ngay trong thư mục này.

#### Câu 1: Toán tử Nullish Coalescing (`a ?? b`) trả về `b` khi nào?
- **A.** Khi `a` là falsy (bao gồm `false`, `0`, `""`, `null`, `undefined`, `NaN`).
- **B.** Khi `a` là `null` hoặc `undefined`.
- **C.** Khi `a` bằng `false`.
- **D.** Khi `a` bằng `0`.

#### Câu 2: Đoạn mã sau in ra kết quả gì?
```javascript
const user = { profile: { name: "An" } };
console.log(user?.settings?.theme ?? "dark");
```
- **A.** `undefined`
- **B.** `TypeError` (báo lỗi)
- **C.** `"dark"`
- **D.** `"light"`

#### Câu 3: Điểm khác nhau giữa Rest parameter (`...args`) và Spread operator (`...arr`) là gì?
- **A.** Rest gom nhiều phần tử lại thành một mảng, còn Spread trải các phần tử của một mảng ra.
- **B.** Rest dùng trong mảng, Spread dùng trong object.
- **C.** Cả hai hoàn toàn giống nhau, chỉ là tên gọi khác nhau.
- **D.** Rest chỉ dùng trong hàm bất đồng bộ.

---

## 💻 PHẦN 2: BÀI TẬP THỰC HÀNH
👉 **Cách làm**: Mở file **`index.js`** trong thư mục này và hoàn thành 3 hàm:
1. `sumAll(...numbers)`: Tính tổng của tất cả các số truyền vào (dùng Rest parameter).
2. `getCity(user)`: Lấy tên thành phố từ object user an toàn bằng `?.` và `??`.
3. `mergeConfig(obj1, obj2)`: Gộp 2 object cấu hình bằng Spread operator.

👉 **Kiểm tra bài làm**:
```bash
npm run test:w2
# Hoặc: node --test assignments/week-02/index.test.js
```
