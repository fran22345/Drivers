const request = require("supertest");
const express = require("express");
const router = require("../src/routes/index.js"); 

const app = express();
app.use(express.json());
app.use("/", router);


describe("GET /drivers", () => {
    it("should respond with status 200 when no query param is provided", async () => {
      const response = await request(app).get("/drivers");
      expect(response.statusCode).toBe(200);
    });
  
    it("should respond with status 200 when 'forename' query param is provided", async () => {
      const response = await request(app).get("/drivers?forename=John");
      expect(response.statusCode).toBe(200);
    });
  
    it("should respond with status 404 for an invalid route", async () => {
      const response = await request(app).get("/invalid-route");
      expect(response.statusCode).toBe(404);
    });
  });
  