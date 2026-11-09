const test = require('node:test');
const assert = require('node:assert');
const { html, raw, createSecureBank, createPipeline } = require('./index');

test('Bài 1 (Mẫu): html tag lọc ký tự nguy hiểm cơ bản', () => {
  const result = html`<div>${'<script>alert(1)</script>'}</div>`;
  assert.strictEqual(result, '<div>&lt;script&gt;alert(1)&lt;/script&gt;</div>');
});

test('Bài 2 (Mẫu): createSecureBank nạp và kiểm tra số dư cơ bản', () => {
  const bank = createSecureBank('mySecret123');
  bank.deposit(500);
  assert.strictEqual(bank.getBalance('mySecret123'), 500);
});

test('Bài 3 (Mẫu): createPipeline tính toán từ trái qua phải', () => {
  const pipe = createPipeline(
    x => x + 5,
    x => x * 2
  );
  assert.strictEqual(pipe(10), 30);
});
