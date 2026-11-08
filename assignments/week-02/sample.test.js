const test = require('node:test');
const assert = require('node:assert');
const { sumAll } = require('./index');

test('Kiểm tra mẫu: sumAll(1, 2) phải bằng 3', () => {
  assert.strictEqual(sumAll(1, 2), 3);
});
