const { test } = require("node:test");
const assert = require("node:assert");
const { fib } = require("../src/fib.js");

test("base cases", () => {
  assert.strictEqual(fib(0), 0);
  assert.strictEqual(fib(1), 1);
});
test("recursion", () => {
  assert.strictEqual(fib(6), 8);
  assert.strictEqual(fib(10), 55);
});
