import request from "supertest";
import app from "../../src/app";

describe("POST /v1/users/register", () => {
  it("should create a new user", async () => {
    const response = await request(app).post("/v1/users/register").send({
      username: "test",
      email: "test@test.com",
      password: "test",
      confirmPassword: "test",
    });

    expect(response.status).toBe(201);
    expect(typeof response.body).toBe("object");
    expect(response.body.message).toBe("User created successfully");
    expect(response.body.data.username).toBe("test");
  });
});
