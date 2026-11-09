const test = require('node:test');
const assert = require('node:assert');
const {
  createExecutionContext,
  createBatchHandlers,
  highlight,
  multilineFormat,
  createScopeRegistry,
} = require('./index');

test('Bài 1.1: createExecutionContext trả về handler giữ đúng lexical this', () => {
  const ctx = createExecutionContext('Alice');
  const handler = ctx.createHandler('read');

  // Gọi độc lập không có object context vẫn giữ được Alice
  assert.strictEqual(handler(), '[read] performed by Alice');

  // Arrow function không thể khởi tạo bằng new
  assert.throws(() => {
    new handler();
  }, TypeError);
});

test('Bài 1.2: createBatchHandlers giải quyết triệt để bẫy closure vòng lặp', () => {
  const handlers = createBatchHandlers(3, 'task');
  assert.strictEqual(handlers.length, 3);
  assert.strictEqual(handlers[0](), 'task-0');
  assert.strictEqual(handlers[1](), 'task-1');
  assert.strictEqual(handlers[2](), 'task-2');
});

test('Bài 2.1: highlight tagged template xử lý bọc thẻ <mark> và null/undefined', () => {
  const name = 'Sterben';
  const score = 100;
  const note = null;

  const result = highlight`User: ${name}, Score: ${score}, Note: ${note}`;
  assert.strictEqual(result, 'User: <mark>Sterben</mark>, Score: <mark>100</mark>, Note: ');
});

test('Bài 2.2: multilineFormat chuẩn hóa thụt lề và dòng trống của template string', () => {
  const id = 42;
  const formatted = multilineFormat`
    SELECT *
    FROM users
    WHERE id = ${id}
  `;

  assert.strictEqual(formatted, 'SELECT *\nFROM users\nWHERE id = 42');
});

test('Bài 3: createScopeRegistry mô phỏng Hoisting, TDZ và Scope Chain', () => {
  const globalScope = createScopeRegistry();

  // Khai báo let -> rơi vào TDZ
  globalScope.declare('x', 'let');
  assert.throws(() => {
    globalScope.get('x');
  }, /Cannot access 'x' before initialization/);

  // Khởi tạo giá trị
  globalScope.initialize('x', 10);
  assert.strictEqual(globalScope.get('x'), 10);

  // Variable Shadowing ở child scope
  const localScope = globalScope.createChildScope();
  localScope.declare('x', 'let');
  localScope.initialize('x', 99);

  assert.strictEqual(localScope.get('x'), 99);
  assert.strictEqual(globalScope.get('x'), 10); // scope cha không bị ảnh hưởng
});
