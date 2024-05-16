/**
 * @file validateNums.js
 * @description Middleware to validate the query parameter `nums` for statistical routes.
 */

const validateNums = (req, res, next) => {
  if (!req.query.nums) {
    return res.status(400).json({
      error:
        "A number or multiple numbers must be provided in the query string nums argument.",
    });
  }

  const nums = req.query.nums.split(",").map(Number);

  if (nums.some(isNaN)) {
    return res
      .status(400)
      .json({ error: "All elements in nums must be numbers." });
  }

  req.nums = nums;
  next();
};

export default validateNums;
