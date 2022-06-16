export type SqrtOptions = {
  /**
   * Initial guess of the value of the root. By default `n` / 2
   */
  initialGuess?: number;
  /**
   * Precision, defined by the maximum allowed delta between `square(result)` and `n`. By default 1.0e-7
   */
  precision?: number;
};

/**
 * @param n The number to calculate the square root of
 * @param options Options for the method: see SqrtOptions
 * @returns An approximation of the (usually positive) square root if `n` is non-negative and defined, `undefined` if `n` is negative, NaN, or an infinity
 */
export default function sqrt(
  n: number,
  { initialGuess = n / 2.0, precision = 1.0e-7 }: SqrtOptions = {},
): number | undefined {
  if (!Number.isFinite(n) || n < 0) {
    return undefined;
  }

  let guess = initialGuess;

  while (guess * guess - n > precision || guess * guess - n < -precision) {
    guess -= (guess * guess - n) / (2 * guess);
  }

  return guess;
}
