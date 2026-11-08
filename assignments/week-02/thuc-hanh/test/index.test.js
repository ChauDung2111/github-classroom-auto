const test = require('node:test');
const assert = require('node:assert');
const { sumAll, getCity, mergeConfig } = require('../index');

test('1. sumAll() phải tính đúng tổng mọi tham số', () => {
  assert.strictEqual(sumAll(1, 2, 3, 4), 10);
  assert.strictEqual(sumAll(5), 5);
  assert.strictEqual(sumAll(), 0);
});

test('2. getCity() phải xử lý an toàn khi object thiếu trường', () => {
  assert.strictEqual(getCity({ address: { city: 'Hà Nội' } }), 'Hà Nội');
  assert.strictEqual(getCity({ address: null }), 'Chưa xác định');
  assert.strictEqual(getCity({}), 'Chưa xác định');
  assert.strictEqual(getCity(null), 'Chưa xác định');
});

test('3. mergeConfig() phải gộp 2 object chính xác', () => {
  const c1 = { host: 'localhost', port: 3000 };
  const c2 = { port: 8080, secure: true };
  assert.deepStrictEqual(mergeConfig(c1, c2), { host: 'localhost', port: 8080, secure: true });
});
