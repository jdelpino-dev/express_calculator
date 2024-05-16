/**
 * @file calculate.js
 * @description Utility functions for calculating mean, median,
 * and mode from a list of numbers.
 */

const mean = (nums) => {
  return nums.reduce((acc, num) => acc + num, 0) / nums.length;
};

const median = (nums) => {
  nums.sort((a, b) => a - b);
  const middle = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0) {
    return (nums[middle - 1] + nums[middle]) / 2;
  }
  return nums[middle];
};

const mode = (nums) => {
  const freq = {};
  let maxFreq = 0;
  let modes = [];

  nums.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      modes = [num];
    } else if (freq[num] === maxFreq) {
      modes.push(num);
    }
  });

  return modes.length === 1 ? modes[0] : modes;
};

export { mean, median, mode };
