# sqrt-newton

Calculate square roots using the Newton-Raphson method.

For univariate differentiable functions between real numbers, the Newton-Raphson method is an iterative root finding method that works by repeatedly finding the intersection between the tangent of a function at the current guess, and the `f(x) == 0` line.

Having our current guess `n0`, we can calculate `n1 = n0 - f(n0)/diff(f)(n0)`.

That means that we can easily devise calculating a square root using the following method:

 1. Take equation `x == sqrt(n)`
 2. Square both sides `x*x == n` (this implies that our algorithm only works for a non-negative n)
 3. Subtract n from both sides `x*x - n == 0`. This is our `f(x)`
 4. Get derivative `2*x`
 5. Get recurrence relation `x1 = x0 - (x0*x0 - n)/(2*x0)`
 6. Iterate until satisfied with precision
 