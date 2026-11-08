# 📚 BÀI TẬP LÝ THUYẾT: TUẦN 02
**Chủ đề:** Destructuring, Rest/Spread Operator, Optional Chaining (`?.`), Nullish Coalescing (`??`)

---

### Hướng dẫn làm bài:
Điền đáp án (A, B, C hoặc D) vào file `tra-loi.json`.

---

#### Câu 1: Toán tử Nullish Coalescing (`a ?? b`) trả về `b` khi nào?
- **A.** Khi `a` là falsy (bao gồm `false`, `0`, `""`, `null`, `undefined`, `NaN`).
- **B.** Khi `a` là `null` hoặc `undefined`.
- **C.** Khi `a` bằng `false`.
- **D.** Khi `a` bằng `0`.

---

#### Câu 2: Đoạn mã sau in ra kết quả gì?
```javascript
const user = { profile: { name: "An" } };
console.log(user?.settings?.theme ?? "dark");
```
- **A.** `undefined`
- **B.** `TypeError` (báo lỗi)
- **C.** `"dark"`
- **D.** `"light"`

---

#### Câu 3: Điểm khác nhau giữa Rest parameter (`...args`) và Spread operator (`...arr`) là gì?
- **A.** Rest gom nhiều phần tử lại thành một mảng, còn Spread trải các phần tử của một mảng ra.
- **B.** Rest dùng trong mảng, Spread dùng trong object.
- **C.** Cả hai hoàn toàn giống nhau, chỉ là tên gọi khác nhau.
- **D.** Rest chỉ dùng trong hàm bất đồng bộ.
