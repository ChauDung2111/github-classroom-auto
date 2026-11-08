// ==========================================
// BÀI TẬP THỰC HÀNH: TUẦN 01
// Chủ đề: JavaScript ES6+ Nền tảng
// ==========================================

/**
 * 1. Viết arrow function tính bình phương của một số
 * @param {number} x
 * @returns {number}
 */
const square = (x) => {
  // TODO: Viết code vào đây
  return x * x;
};

/**
 * 2. Viết hàm format thông tin người dùng sử dụng Template Literals
 * Trả về chuỗi: "Xin chào, tôi là [name], [age] tuổi, làm nghề [job]."
 * @param {string} name
 * @param {number} age
 * @param {string} job
 * @returns {string}
 */
const formatUserInfo = (name, age, job) => {
  // TODO: Viết code vào đây
  return `Xin chào, tôi là ${name}, ${age} tuổi, làm nghề ${job}.`;
};

/**
 * 3. Viết hàm lọc ra danh sách các số lớn hơn một giá trị ngưỡng `threshold`
 * Yêu cầu: Sử dụng arrow function kết hợp phương thức filter của mảng
 * @param {number[]} numbers
 * @param {number} threshold
 * @returns {number[]}
 */
const filterGreaterThan = (numbers, threshold) => {
  // TODO: Viết code vào đây
  return numbers.filter((num) => num > threshold);
};

module.exports = {
  square,
  formatUserInfo,
  filterGreaterThan,
};
