/**
 * @file calculate.test.js
 * @description Unit tests for the statistical calculation functions (mean, median, mode) using Jest.
 */

import { mean, median, mode } from "../src/utils/calculate.js";

describe("Statistical Functions", () => {
  describe("Mean Function", () => {
    test("mean of [1, 2, 3, 4, 5] should be 3", () => {
      expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });

    test("mean of [10, 20, 30] should be 20", () => {
      expect(mean([10, 20, 30])).toBe(20);
    });

    test("mean of [2.5, 3.5, 4.5] should be 3.5", () => {
      expect(mean([2.5, 3.5, 4.5])).toBeCloseTo(3.5);
    });

    test("mean of a single element [7] should be 7", () => {
      expect(mean([7])).toBe(7);
    });

    test("mean of an empty array should be NaN", () => {
      expect(mean([])).toBeNaN();
    });
  });

  describe("Median Function", () => {
    test("median of [1, 2, 3, 4, 5] should be 3", () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });

    test("median of [3, 1, 2, 5, 4] should be 3", () => {
      expect(median([3, 1, 2, 5, 4])).toBe(3);
    });

    test("median of [10, 20, 30] should be 20", () => {
      expect(median([10, 20, 30])).toBe(20);
    });

    test("median of [1, 2, 3, 4] should be 2.5", () => {
      expect(median([1, 2, 3, 4])).toBeCloseTo(2.5);
    });

    test("median of a single element [7] should be 7", () => {
      expect(median([7])).toBe(7);
    });

    test("median of an empty array should be NaN", () => {
      expect(median([])).toBeNaN();
    });
  });

  describe("Mode Function", () => {
    test("mode of [1, 2, 2, 3, 4, 5] should be 2", () => {
      expect(mode([1, 2, 2, 3, 4, 5])).toBe(2);
    });

    test("mode of [1, 1, 2, 2, 3, 3, 4, 4, 5, 5] should be [1, 2, 3, 4, 5]", () => {
      expect(mode([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("mode of [1, 2, 3, 4, 4, 5, 5, 6] should be [4, 5]", () => {
      expect(mode([1, 2, 3, 4, 4, 5, 5, 6])).toEqual([4, 5]);
    });

    test("mode of [10, 20, 20, 10, 30] should be [10, 20]", () => {
      expect(mode([10, 20, 20, 10, 30])).toEqual([10, 20]);
    });

    test("mode of [7] should be 7", () => {
      expect(mode([7])).toBe(7);
    });

    test("mode of an empty array should be NaN", () => {
      expect(mode([])).toBeNaN();
    });
  });
});
