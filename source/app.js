/**
 * @file app.js
 * @description Configures the Express application, including middleware
 * for logging, JSON parsing, and error handling.
 */

import express from "express";
import morgan from "morgan";
import statsRouter from "./routes/stats.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/stats", statsRouter);

app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    res.status(400).json({ error: "Invalid JSON" });
  } else {
    next(err);
  }
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.status || 500;
  res.status(statusCode);

  if (statusCode === 500) {
    return res.json({
      error: "Internal Server Error",
    });
  }

  return res.json({
    error: err.message,
  });
});

export default app;
