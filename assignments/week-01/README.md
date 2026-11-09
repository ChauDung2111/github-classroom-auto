# 📌 TUẦN 01: JAVASCRIPT ES6+ NỀN TẢNG
**Chủ đề:** `let/const/var`, Scope, Hoisting, Arrow Functions, Template Literals

---

## 📚 PHẦN 1: BÀI TẬP LÝ THUYẾT (30 CÂU TĂNG DẦN ĐỘ KHÓ)

👉 **Cách làm bài**: Đọc kỹ 30 câu hỏi dưới đây và điền đáp án bạn chọn (`"A"`, `"B"`, `"C"` hoặc `"D"`) vào file **`quiz.json`** ngay trong thư mục này.

---

### 🟢 MỨC ĐỘ 1: CƠ BẢN & NHẬN BIẾT (CÂU 1 - 10)

#### Câu 1: Từ khóa nào trong ES6 dùng để khai báo hằng số không thể gán lại giá trị?
- **A.** `var`
- **B.** `const`
- **C.** `let`
- **D.** `static`

#### Câu 2: Phạm vi hoạt động (scope) mặc định của biến khai báo bằng `var` là gì?
- **A.** Function scope (phạm vi hàm) hoặc Global scope (toàn cục)
- **B.** Block scope (trong cặp ngoặc nhọn `{}`)
- **C.** Module scope
- **D.** Chỉ có phạm vi trong vòng lặp

#### Câu 3: Biến khai báo bằng `let` có phạm vi hoạt động như thế nào?
- **A.** Function scope
- **B.** Chỉ tồn tại trong file hiện tại
- **C.** Block scope (giới hạn trong khối lệnh `{}` bao quanh nó)
- **D.** Toàn cục bất kể khai báo ở đâu

#### Câu 4: Ký tự nào được sử dụng để bao bọc chuỗi trong tính năng Template Literals của ES6?
- **A.** Dấu nháy đơn (`'`)
- **B.** Dấu nháy kép (`"`)
- **C.** Dấu ngoặc kép (`« »`)
- **D.** Dấu backtick (`` ` ``)

#### Câu 5: Cú pháp chuẩn để nhúng một biểu thức hoặc biến vào trong Template Literals là gì?
- **A.** `{{expression}}`
- **B.** `${expression}`
- **C.** `%{expression}`
- **D.** `#{expression}`

#### Câu 6: Điều gì xảy ra khi bạn khai báo `const PI;` mà không gán ngay giá trị ban đầu?
- **A.** Báo lỗi cú pháp `SyntaxError: Missing initializer in const declaration`
- **B.** Biến `PI` tự động nhận giá trị `undefined`
- **C.** Biến `PI` tự động nhận giá trị `null`
- **D.** Chương trình vẫn chạy bình thường cho đến khi được gán giá trị

#### Câu 7: Khai báo lại (re-declare) cùng một tên biến trong cùng một block scope bằng từ khóa `let` sẽ dẫn đến điều gì?
- **A.** Giá trị sau sẽ ghi đè giá trị trước mà không có lỗi
- **B.** Biến bị chuyển về kiểu dữ liệu mảng
- **C.** Báo lỗi `SyntaxError: Identifier has already been declared`
- **D.** Biến tự động đổi tên thành biến toàn cục

#### Câu 8: Trong cú pháp Arrow Function, khi nào ta có thể bỏ cặp dấu ngoặc đơn `()` quanh danh sách tham số?
- **A.** Khi hàm không nhận tham số nào
- **B.** Khi hàm có đúng duy nhất 1 tham số
- **C.** Khi hàm có từ 2 tham số trở lên
- **D.** Luôn luôn bắt buộc phải có ngoặc đơn

#### Câu 9: Arrow Function có cơ chế "Implicit Return" (tự động trả về giá trị mà không cần từ khóa `return`) khi nào?
- **A.** Khi thân hàm là một biểu thức đơn lẻ và không dùng cặp ngoặc nhọn `{}`
- **B.** Khi hàm chỉ có 1 tham số đầu vào
- **C.** Khi giá trị trả về là số nguyên
- **D.** Mọi Arrow function đều tự động trả về giá trị

#### Câu 10: Cho đoạn mã: `const user = { name: "An" };`. Thao tác nào sau đây là HỢP LỆ?
- **A.** `user = { name: "Bình" };`
- **B.** `user = "An";`
- **C.** `user.name = "Bình";`
- **D.** `user = null;`

---

### 🟡 MỨC ĐỘ 2: THÔNG HIỂU & VẬN DỤNG (CÂU 11 - 20)

#### Câu 11: Hiện tượng "Hoisting" trong JavaScript được hiểu chính xác nhất là gì?
- **A.** Trình biên dịch xóa các biến không sử dụng trước khi chạy
- **B.** Phần khai báo biến và hàm được đưa lên đầu phạm vi (scope) tương ứng trong pha khởi tạo
- **C.** Quá trình tự động giải phóng vùng nhớ (Garbage Collection)
- **D.** Tự động ép kiểu dữ liệu khi so sánh bằng toán tử `==`

#### Câu 12: Đoạn mã sau in ra kết quả gì?
```javascript
console.log(x);
var x = 10;
```
- **A.** `undefined`
- **B.** `10`
- **C.** Báo lỗi `ReferenceError`
- **D.** `null`

#### Câu 13: Đoạn mã sau in ra kết quả gì?
```javascript
console.log(y);
let y = 10;
```
- **A.** `undefined`
- **B.** `10`
- **C.** `null`
- **D.** Báo lỗi `ReferenceError: Cannot access 'y' before initialization`

#### Câu 14: Khái niệm "Temporal Dead Zone" (TDZ) là gì?
- **A.** Vùng nhớ bị rò rỉ khi sử dụng closure không đúng cách
- **B.** Thời gian chờ phản hồi của một Promise hoặc Async function
- **C.** Vùng từ đầu block scope cho tới dòng khai báo `let`/`const`, truy cập biến trong vùng này sẽ sinh `ReferenceError`
- **D.** Vùng bộ nhớ dành riêng cho biến toàn cục của `window`

#### Câu 15: Điểm khác biệt cơ bản nhất về từ khóa `this` giữa Arrow Function và Regular Function là gì?
- **A.** Arrow function có `this` luôn trỏ tới `null`
- **B.** Arrow function không có `this` riêng mà kế thừa (lexical scope) `this` từ ngữ cảnh cha bao quanh nó
- **C.** Arrow function tự động bind `this` vào đối tượng `global` trong mọi trường hợp
- **D.** Regular function không có `this`, chỉ Arrow function mới có `this`

#### Câu 16: Điều gì xảy ra khi bạn cố gắng khởi tạo đối tượng bằng từ khóa `new` với một Arrow Function (VD: `const F = () => {}; new F();`)?
- **A.** Báo lỗi `TypeError: F is not a constructor`
- **B.** Trả về một object rỗng `{}`
- **C.** Trả về giá trị `undefined`
- **D.** Khởi tạo thành công đối tượng mới kế thừa từ `Function.prototype`

#### Câu 17: Đối tượng giả mảng `arguments` bên trong Arrow Function có đặc điểm gì?
- **A.** Chứa danh sách các đối số truyền vào Arrow Function như hàm thông thường
- **B.** Luôn bằng một mảng rỗng `[]`
- **C.** Arrow function không có `arguments` riêng; nếu gọi, nó sẽ tìm `arguments` của hàm cha gần nhất hoặc báo `ReferenceError`
- **D.** `arguments` là từ khóa cấm trong Arrow Function, gây lỗi `SyntaxError`

#### Câu 18: Đoạn mã sau in ra kết quả gì?
```javascript
console.log(typeof a);
console.log(typeof b);
var a = 1;
let b = 2;
```
- **A.** `"number"` rồi `"number"`
- **B.** `"undefined"` rồi `"undefined"`
- **C.** `"undefined"` rồi `"number"`
- **D.** In ra `"undefined"`, sau đó dòng 2 ném lỗi `ReferenceError`

#### Câu 19: Đoạn mã sau in ra kết quả gì?
```javascript
var num = 5;
function check() {
  console.log(num);
  var num = 10;
}
check();
```
- **A.** `undefined` (do biến `num` bên trong hàm bị hoisted)
- **B.** `5`
- **C.** `10`
- **D.** Báo lỗi `ReferenceError`

#### Câu 20: Cho hàm sau:
```javascript
const makeTotal = (a, b) => { total: a + b };
console.log(makeTotal(3, 4));
```
Kết quả in ra màn hình là gì?
- **A.** `{ total: 7 }`
- **B.** `undefined`
- **C.** `7`
- **D.** Báo lỗi cú pháp `SyntaxError`

---

### 🔴 MỨC ĐỘ 3: NÂNG CAO, CẠM BẪY & CHUYÊN SÂU (CÂU 21 - 30)

#### Câu 21: Để Arrow Function tự động trả về một Object Literal (Implicit Return) mà không bị nhầm thành khối lệnh `{}` của thân hàm, ta phải viết như thế nào?
- **A.** `const make = (a, b) => { return total: a + b };`
- **B.** `const make = (a, b) => [total: a + b];`
- **C.** `const make = (a, b) => ({ total: a + b });`
- **D.** `const make = (a, b) => { { total: a + b } };`

#### Câu 22: Đoạn mã kinh điển sau in ra kết quả gì sau 100ms?
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```
- **A.** `3 3 3`
- **B.** `0 1 2`
- **C.** `undefined undefined undefined`
- **D.** `0 0 0`

#### Câu 23: Nếu thay `var i = 0` bằng `let i = 0` trong đoạn mã ở Câu 22:
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```
Kết quả in ra sẽ là gì và vì sao?
- **A.** `3 3 3` vì `setTimeout` vẫn chạy sau khi vòng for kết thúc
- **B.** `0 1 2` vì mỗi vòng lặp `for (let ...)` tạo ra một lexical scope riêng biệt lưu giữ giá trị của `i`
- **C.** `undefined undefined undefined` vì biến `let` bị hủy sau khi for chạy xong
- **D.** Báo lỗi `ReferenceError`

#### Câu 24: Đoạn mã sau in ra gì trong môi trường Node.js module?
```javascript
const counter = {
  count: 10,
  getCount: () => this.count
};
console.log(counter.getCount());
```
- **A.** `10`
- **B.** `null`
- **C.** `undefined` (do Arrow function lấy `this` ở scope bên ngoài, lúc này `this` là `module.exports` chứ không phải `counter`)
- **D.** Báo lỗi `TypeError`

#### Câu 25: Xét đoạn mã callback sau:
```javascript
const person = {
  name: "Nam",
  sayHi() {
    setTimeout(function() {
      console.log(this.name);
    }, 50);
  }
};
person.sayHi();
```
Kết quả in ra là gì (trong môi trường non-strict)?
- **A.** `"Nam"`
- **B.** `undefined` (do hàm truyền vào `setTimeout` được thực thi với ngữ cảnh Global `this`)
- **C.** Báo lỗi `TypeError: Cannot read properties of undefined`
- **D.** `null`

#### Câu 26: Để đoạn mã ở Câu 25 in ra đúng `"Nam"` mà KHÔNG cần dùng `.bind(this)` hay gán biến trung gian `const self = this;`, cách viết nào chuẩn ES6 nhất?
- **A.** Đổi `function() { ... }` thành Arrow function: `setTimeout(() => { console.log(this.name); }, 50);`
- **B.** Đổi `setTimeout` thành `setInterval`
- **C.** Đổi `sayHi()` thành Arrow function
- **D.** Đặt `'use strict'` ở đầu hàm `sayHi`

#### Câu 27: Trong môi trường JavaScript non-strict, khi gán giá trị cho một biến chưa từng được khai báo (VD: `function test() { score = 100; } test();`), hiện tượng gì xảy ra?
- **A.** Báo lỗi `ReferenceError: score is not defined`
- **B.** Biến `score` tự động trở thành biến cục bộ có phạm vi hàm
- **C.** Biến `score` bị gán vào Temporal Dead Zone
- **D.** Biến `score` tự động trở thành một thuộc tính toàn cục trên đối tượng `global` / `window` (gây ô nhiễm phạm vi toàn cục)

#### Câu 28: Trong chế độ Strict Mode (mặc định của ES Modules), điều gì xảy ra với Function Declaration được đặt bên trong một khối block `{}`?
```javascript
"use strict";
{
  function doSomething() { return "OK"; }
}
console.log(typeof doSomething);
```
- **A.** In ra `"function"` vì hàm luôn có phạm vi toàn cục
- **B.** In ra `"undefined"` vì trong strict mode, Function Declaration tuân theo Block Scope
- **C.** Báo lỗi cú pháp `SyntaxError`
- **D.** In ra `"null"`

#### Câu 29: Tính năng Tagged Template Literals hoạt động như thế nào trong đoạn mã sau?
```javascript
function tag(strings, ...values) {
  return strings[0] + values[0].toUpperCase() + strings[1];
}
const lang = "javascript";
console.log(tag`Học ${lang} nhé!`);
```
- **A.** `"Học ${lang} nhé!"`
- **B.** `"Học javascript nhé!"`
- **C.** `"Học JAVASCRIPT nhé!"`
- **D.** Báo lỗi `TypeError: tag is not a function`

#### Câu 30: Xét hàm có tham số mặc định (Default Parameters) kết hợp TDZ:
```javascript
let val = 10;
function calculate(val = num, num = 20) {
  return val + num;
}
calculate();
```
Điều gì sẽ xảy ra khi gọi `calculate()`?
- **A.** Trả về `30`
- **B.** Trả về `40`
- **C.** Trả về `NaN`
- **D.** Báo lỗi `ReferenceError: Cannot access 'num' before initialization` do `num` đang ở trong TDZ khi `val = num` được đánh giá

---

## 💻 PHẦN 2: BÀI TẬP THỰC HÀNH NÂNG CAO (CHUYÊN SÂU ES6+)

Mở file **`index.js`** trong thư mục này và hoàn thành 3 bài toán kiến trúc thực tế:

---

### 🔥 Bài 1: Tagged Template Literal XSS Sanitizer (`html` & `raw`)
Xây dựng một template tag function `html` để tự động hóa việc lọc các ký tự nguy hiểm nhằm chống tấn công XSS (tương tự cơ chế của thư viện `lit-html` / `htmx`):
- **Escape ký tự**: Mọi giá trị truyền vào `${val}` nếu là chuỗi phải tự động thay thế:
  - `&` $\to$ `&amp;`
  - `<` $\to$ `&lt;`
  - `>` $\to$ `&gt;`
  - `"` $\to$ `&quot;`
  - `'` $\to$ `&#39;`
- **Hàm `raw(content)`**: Nếu giá trị được bọc bằng hàm `raw(val)`, template tag sẽ **bỏ qua việc escape** và render nguyên bản HTML đó.
- **Xử lý đặc biệt**:
  - Nếu giá trị là mảng (Array): Tự động escape từng phần tử và nối lại thành chuỗi.
  - Nếu giá trị là `null` hoặc `undefined`: Chuyển thành chuỗi rỗng `""`.
  - Các kiểu dữ liệu số (`number`), boolean: Chuyển thành chuỗi bình thường.

*Ví dụ:*
```javascript
const name = "<script>bad()</script>";
const badge = raw("<b>VIP</b>");
html`<div>User: ${name} - ${badge}</div>`;
// => "<div>User: &lt;script&gt;bad()&lt;/script&gt; - <b>VIP</b></div>"
```

---

### 🔥 Bài 2: Private Bank Vault (`createSecureBank`)
Vận dụng **Block Scope**, **Closures** và **Object Immutability** để thiết kế một module tài khoản ngân hàng bảo mật tuyệt đối, **không dùng class hay `#privateField`**:
- **Khởi tạo**: `createSecureBank(initialSecret)`:
  - `initialSecret` phải là chuỗi có độ dài $\ge 6$, nếu không ném `Error`.
  - Số dư ban đầu `balance = 0`, danh sách lịch sử `history = []`.
- **Bảo mật tuyệt đối**:
  - Không được lưu `balance` hay `secretKey` làm thuộc tính trên object trả về (kiểm tra `Object.keys(bank)` không được có các thuộc tính này).
  - Object trả về phải được đóng băng bằng `Object.freeze()`.
- **Các phương thức**:
  1. `deposit(amount)`: `amount` phải là số dương $> 0$ (ngược lại ném `TypeError`). Cộng dồn số dư, ghi nhận `{ type: 'deposit', amount, timestamp }` vào lịch sử và trả về balance mới.
  2. `withdraw(amount, key)`: Yêu cầu đúng `key` (sai ném `Error("Unauthorized")`). `amount` phải là số dương (sai ném `TypeError`). Không được rút quá số dư (vượt quá ném `Error("Insufficient funds")`). Trừ số dư, ghi nhận `{ type: 'withdraw', amount, timestamp }` vào lịch sử và trả về balance mới.
  3. `getBalance(key)`: Kiểm tra `key` (sai ném `Error("Unauthorized")`), trả về số dư.
  4. `getHistory(key)`: Kiểm tra `key` (sai ném `Error("Unauthorized")`), trả về **bản sao** của lịch sử (sửa mảng trả về không làm thay đổi lịch sử bên trong).
  5. `changeKey(oldKey, newKey)`: Cung cấp đúng `oldKey` (sai ném `Error("Unauthorized")`). `newKey` phải là chuỗi có độ dài $\ge 6$ (sai ném `Error("Invalid key")`). Đổi key thành công trả về `true`.

---

### 🔥 Bài 3: Smart Pipeline với Context Preservation (`createPipeline`)
Xây dựng hàm tạo Data Pipeline theo phong cách Functional Programming kết hợp quản lý ngữ cảnh `this`:
- **Đầu vào**: `createPipeline(...fns)` nhận danh sách các hàm xử lý từ trái qua phải.
  - Nếu bất kỳ phần tử nào trong `...fns` không phải là hàm (`typeof !== 'function'`), ném ngay `TypeError("Pipeline element must be a function")`.
- **Đầu ra**: Trả về một hàm thực thi `pipeline(initialValue)`.
  - Kết quả của hàm trước được làm đầu vào cho hàm sau.
  - Nếu pipeline rỗng (không truyền hàm nào), trả về chính `initialValue`.
- **Bảo tồn ngữ cảnh `this` (Điểm nâng cao)**:
  - Hàm pipeline trả về phải hỗ trợ gọi qua `.call(context, initialValue)` hoặc `.apply(context, [initialValue])`.
  - Toàn bộ các regular function bên trong pipeline phải nhận đúng đối tượng `this` được truyền vào từ bên ngoài!

*Ví dụ:*
```javascript
const ctx = { taxRate: 0.1 };
const calculateTotal = createPipeline(
  x => x + 100,
  function(total) { return total * (1 + this.taxRate); }
);
calculateTotal.call(ctx, 400); // (400 + 100) * 1.1 = 550
```

---

👉 **Kiểm tra cú pháp tại máy trước khi nộp**:
```bash
npm run w1
```
