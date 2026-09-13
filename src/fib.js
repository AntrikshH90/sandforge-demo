// Fibonacci — deliberately broken base case (bug for SandForge to fix)
function fib(n) {
  if (n <= 1) return n;
  return n < 2 ? 1 : fib(n - 1) + fib(n - 2);
}
module.exports = { fib };