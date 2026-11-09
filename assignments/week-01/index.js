// ============================================================================
// BÀI TẬP THỰC HÀNH NÂNG CAO: TUẦN 01
// Chủ đề: Scope, Closure Encapsulation, Tagged Template Literals, Lexical this
// ============================================================================

// ----------------------------------------------------------------------------
// BÀI 1: Tagged Template Literal XSS Sanitizer (html & raw)
// ----------------------------------------------------------------------------
/**
 * Đánh dấu một chuỗi an toàn không cần escape HTML.
 * @param {*} value
 * @returns {object} Object chứa cờ đánh dấu an toàn
 */
const raw = (value) => {
  // TODO: Học viên viết code ở đây
};

/**
 * Tagged template function tự động escape các ký tự nguy hiểm trong chuỗi:
 * '&' -> '&amp;', '<' -> '&lt;', '>' -> '&gt;', '"' -> '&quot;', "'" -> '&#39;'
 * - Nếu giá trị được bọc bởi raw(val) -> không escape.
 * - Nếu giá trị là mảng -> xử lý từng phần tử và nối lại thành chuỗi.
 * - Nếu giá trị là null hoặc undefined -> chuyển thành chuỗi rỗng "".
 * - Các kiểu dữ liệu khác (number, boolean...) -> chuyển thành chuỗi bình thường.
 * 
 * @param {TemplateStringsArray} strings
 * @param  {...any} values
 * @returns {string} Chuỗi HTML an toàn
 */
const html = (strings, ...values) => {
  // TODO: Học viên viết code ở đây
};

// ----------------------------------------------------------------------------
// BÀI 2: Private Bank Vault (Scope, Closure & Immutability)
// ----------------------------------------------------------------------------
/**
 * Khởi tạo một tài khoản ngân hàng bảo mật bằng Scope và Closure.
 * Tuyệt đối không lưu secretKey hay balance dưới dạng thuộc tính trên object trả về!
 * 
 * Yêu cầu:
 * - initialSecret phải là chuỗi có độ dài >= 6 ký tự, nếu không ném Error.
 * - Số dư ban đầu balance = 0, danh sách lịch sử history = [].
 * 
 * Object trả về phải được đóng băng (Object.freeze) và chứa các phương thức:
 * 1. deposit(amount):
 *    - amount phải là số dương > 0, nếu sai ném TypeError.
 *    - Cộng amount vào balance, ghi nhận vào history: { type: 'deposit', amount, timestamp: Date.now() }.
 *    - Trả về balance mới.
 * 2. withdraw(amount, key):
 *    - key không khớp với secretKey hiện tại -> ném Error("Unauthorized").
 *    - amount không phải số dương > 0 -> ném TypeError.
 *    - amount > balance -> ném Error("Insufficient funds").
 *    - Trừ amount khỏi balance, ghi nhận vào history: { type: 'withdraw', amount, timestamp: Date.now() }.
 *    - Trả về balance mới.
 * 3. getBalance(key):
 *    - key sai -> ném Error("Unauthorized").
 *    - key đúng -> trả về balance hiện tại.
 * 4. getHistory(key):
 *    - key sai -> ném Error("Unauthorized").
 *    - key đúng -> trả về BẢN SAO của mảng history (người ngoài sửa mảng này không ảnh hưởng lịch sử gốc).
 * 5. changeKey(oldKey, newKey):
 *    - oldKey sai -> ném Error("Unauthorized").
 *    - newKey không phải chuỗi hoặc độ dài < 6 -> ném Error("Invalid key").
 *    - Cập nhật secretKey thành newKey, trả về true.
 * 
 * @param {string} initialSecret
 * @returns {object} Đối tượng ngân hàng đã được đóng băng (frozen)
 */
const createSecureBank = (initialSecret) => {
  // TODO: Học viên viết code ở đây
};

// ----------------------------------------------------------------------------
// BÀI 3: Smart Functional Pipeline with Context Preservation
// ----------------------------------------------------------------------------
/**
 * Xây dựng hàm tạo pipeline xử lý dữ liệu từ trái qua phải (Left-to-Right).
 * Yêu cầu:
 * 1. Nếu bất kỳ đối số nào truyền vào ...fns không phải là hàm (typeof !== 'function'),
 *    ném ra TypeError("Pipeline element must be a function").
 * 2. Trả về một hàm thực thi pipeline: fn(initialValue).
 * 3. Nếu pipeline rỗng (...fns không có hàm nào) -> trả về chính initialValue.
 * 4. BẢO TỒN NGỮ CẢNH (Context Preservation):
 *    Hàm pipeline trả về phải cho phép gọi với .call(context, val) hoặc .apply(context, [val])
 *    và truyền đúng context `this` đó vào TẤT CẢ các regular functions trong pipeline!
 * 
 * @param  {...Function} fns
 * @returns {Function} Hàm thực thi pipeline
 */
const createPipeline = (...fns) => {
  // TODO: Học viên viết code ở đây
};

module.exports = {
  raw,
  html,
  createSecureBank,
  createPipeline,
};
