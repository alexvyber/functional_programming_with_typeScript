namespace recursion_demo_1 {
  const factorial = (n: number): number => (n === 0 ? 1 : n * factorial(n - 1))
  factorial(5) // 120
}
