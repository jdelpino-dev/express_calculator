/**
 * @file stats.test.js
 * @description Unit tests for API routes handling mean, median, and mode
 * calculations using Jest and Supertest.
 */

import request from "supertest";
import app from "../src/app.js";

describe("API Routes", () => {
  test("GET /stats/mean?nums=1,2,3,4,5 should return mean of 3", async () => {
    const response = await request(app).get("/stats/mean?nums=1,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: "mean", value: 3 });
  });

  test("GET /stats/median?nums=1,2,3,4,5 should return median of 3", async () => {
    const response = await request(app).get("/stats/median?nums=1,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: "median", value: 3 });
  });

  test("GET /stats/median?nums=1,2,3,4,5,6 should return median of 3.5", async () => {
    const response = await request(app).get("/stats/median?nums=1,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toBeCloseTo({ operation: "median", value: 3.5 });
  });

  test("GET /stats/mode?nums=1,2,2,3,4,5 should return mode of 2", async () => {
    const response = await request(app).get("/stats/mode?nums=1,2,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ operation: "mode", value: 2 });
  });

  test("GET /stats/all?nums=1,2,2,3,4,5 should return all operations", async () => {
    const response = await request(app).get("/stats/all?nums=1,2,2,3,4,5");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      operation: "all",
      mean: 2.8333333333333335,
      median: 2.5,
      mode: 2,
    });
  });

  test("GET /stats/mean without nums should return 400 error", async () => {
    const response = await request(app).get("/stats/mean");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "nums are required" });
  });

  test("GET /stats/mean with invalid nums should return 400 error", async () => {
    const response = await request(app).get("/stats/mean?nums=foo,2,3");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "All elements in nums must be numbers",
    });
  });
});
