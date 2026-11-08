const test = require('node:test');
const assert = require('node:assert');
const { square } = require('./index');

test('Kiểm tra mẫu: square(2) phải bằng 4', () => {
  assert.strictEqual(square(2), 4);
});
