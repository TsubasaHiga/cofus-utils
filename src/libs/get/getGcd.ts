import { toPositiveNumber } from '@libs/to/toPositiveNumber'

/**
 * Calculates and returns the greatest common divisor (GCD) of two numbers.
 *
 * This function uses the Euclidean algorithm to find the GCD. It first converts
 * both numbers to their positive equivalents using the `toPositiveNumber` function.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The greatest common divisor of the two numbers.
 */
export const getGcd = (a: number, b: number): number => {
  const positiveA = toPositiveNumber(Math.abs(a))
  const positiveB = toPositiveNumber(Math.abs(b))

  if (positiveB === 0) return positiveA
  return getGcd(positiveB, positiveA % positiveB)
}
