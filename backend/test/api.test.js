import supertest from "supertest";

const request = supertest("http://localhost:5000/api");

describe("GET REQUESTS - COUNTRIES", () => {
  it("GET /countries", async () => {
    const response = await request.get("/countries").set("x-api-key", "developToday-is-the-best");
    expect(response.status).toBe(200);
  });
});

describe("GET REQUESTS - COUNTRY BY CODE", () => {
    it("GET /country/AR", async () => {
      const response = await request.get("/country/AR").set("x-api-key", "developToday-is-the-best");
      expect(response.status).toBe(200);
    });
  });
