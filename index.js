// ==========================================
// BÀI TẬP: JAVASCRIPT ES6+ NỀN TẢNG
// Hướng dẫn: Học viên hoàn thành các hàm dưới đây
// ==========================================

/**
 * 1. Hàm tính tổng 2 số
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  // TODO: Viết code ở đây
  return a + b;
}

/**
 * 2. Hàm kiểm tra một số có phải là số chẵn hay không
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
  // TODO: Viết code ở đây
  return num % 2 === 0;
}

/**
 * 3. Hàm đảo ngược một chuỗi ký tự
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  // TODO: Viết code ở đây
  return str.split('').reverse().join('');
}

module.exports = {
  sum,
  isEven,
  reverseString,
};
