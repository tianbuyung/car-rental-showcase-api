import request from "supertest";
import app from "../src/app";

describe("App", () => {
  it('should respond with "Hello, World!" on the root route', async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello, World!");
  });
});
