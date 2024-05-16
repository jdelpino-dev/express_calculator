/**
 * @file stats.js
 * @description Defines routes for calculating mean, median,
 * and mode statistics from a list of numbers.
 */

import { Router } from "express";
import validateNums from "../middleware/validateNums.js";
import { mean, median, mode } from "../utils/calculate.js";
import saveToFile from "../utils/saveToFile.js";

const router = Router();

router.get("/mean", validateNums, (req, res, next) => {
  try {
    const nums = req.nums;
    const result = mean(nums);
    const response = { operation: "mean", value: result };
    if (req.query.save === "true") {
      saveToFile("results.json", response);
    }
    res.format({
      "application/json": () => res.json(response),
      "text/html": () => res.send(`<p>Operation: mean, Value: ${result}</p>`),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/median", validateNums, (req, res, next) => {
  try {
    const nums = req.nums;
    const result = median(nums);
    const response = { operation: "median", value: result };
    if (req.query.save === "true") {
      saveToFile("results.json", response);
    }
    res.format({
      "application/json": () => res.json(response),
      "text/html": () =>
        res.send(`<p>Operation: median, Value: ${result}</p>`),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/mode", validateNums, (req, res, next) => {
  try {
    const nums = req.nums;
    const result = mode(nums);
    const response = { operation: "mode", value: result };
    if (req.query.save === "true") {
      saveToFile("results.json", response);
    }
    res.format({
      "application/json": () => res.json(response),
      "text/html": () => res.send(`<p>Operation: mode, Value: ${result}</p>`),
    });
  } catch (error) {
    next(error);
  }
});

router.get("/all", validateNums, (req, res, next) => {
  try {
    const nums = req.nums;
    const result = {
      operation: "all",
      mean: mean(nums),
      median: median(nums),
      mode: mode(nums),
    };
    if (req.query.save === "true") {
      saveToFile("results.json", result);
    }
    res.format({
      "application/json": () => res.json(result),
      "text/html": () =>
        res.send(
          `<p>Operation: all, Mean: ${result.mean}, Median: ${result.median}, Mode: ${result.mode}</p>`
        ),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
