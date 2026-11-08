const test = require('node:test');
const assert = require('node:assert');
const { sum, isEven, reverseString } = require('../index');

test('1. sum() phải tính đúng tổng 2 số', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(-1, 5), 4);
  assert.strictEqual(sum(0, 0), 0);
});

test('2. isEven() phải trả về true cho số chẵn và false cho số lẻ', () => {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(0), true);
  assert.strictEqual(isEven(7), false);
  assert.strictEqual(isEven(-3), false);
});

test('3. reverseString() phải đảo ngược chính xác chuỗi', () => {
  assert.strictEqual(reverseString('hello'), 'olleh');
  assert.strictEqual(reverseString('nodejs'), 'sjedon');
  assert.strictEqual(reverseString(''), '');
});
