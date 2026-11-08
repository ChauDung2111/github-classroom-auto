const test = require('node:test');
const assert = require('node:assert');
const { square, formatUserInfo, filterGreaterThan } = require('./index');

test('1. square() phải tính đúng bình phương của một số', () => {
  assert.strictEqual(square(4), 16);
  assert.strictEqual(square(-5), 25);
  assert.strictEqual(square(0), 0);
});

test('2. formatUserInfo() phải trả về chuỗi template literals chính xác', () => {
  const result = formatUserInfo('Nam', 22, 'Developer');
  assert.strictEqual(result, 'Xin chào, tôi là Nam, 22 tuổi, làm nghề Developer.');
});

test('3. filterGreaterThan() phải lọc đúng các phần tử lớn hơn ngưỡng', () => {
  const nums = [1, 5, 8, 12, 3, 20];
  assert.deepStrictEqual(filterGreaterThan(nums, 5), [8, 12, 20]);
  assert.deepStrictEqual(filterGreaterThan(nums, 25), []);
});
