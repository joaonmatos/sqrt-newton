import sqrt from "./sqrt.ts";
import {
  assertAlmostEquals,
  assertExists,
  assertStrictEquals,
} from "https://deno.land/std@0.144.0/testing/asserts.ts";

Deno.test("sqrt(2)", () => {
  const expected = 1.414213547;
  const actual = sqrt(2);
  assertExists(actual);
  assertAlmostEquals(actual, expected, 1.0e-5);
});

Deno.test("sqrt(4)", () => {
  const expected = 2;
  const actual = sqrt(4);
  assertExists(actual);
  assertAlmostEquals(actual, expected, 1.0e-5);
});

Deno.test("sqrt(0)", () => {
  const expected = 0;
  const actual = sqrt(0);
  assertExists(actual);
  assertAlmostEquals(actual, expected, 1.0e-5);
});

Deno.test("sqrt(negative_number)", () => {
  assertStrictEquals(sqrt(-1), undefined);
});

Deno.test("sqrt(NaN)", () => {
  assertStrictEquals(sqrt(NaN), undefined);
});

Deno.test("sqrt(POSITIVE_INFINITY)", () => {
  assertStrictEquals(sqrt(Number.POSITIVE_INFINITY), undefined);
});

Deno.test("sqrt(NEGATIVE_INFINITY)", () => {
  assertStrictEquals(sqrt(Number.NEGATIVE_INFINITY), undefined);
});
