import { describe, it, expect, beforeAll } from "vitest";
import app from "../../src/main";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("List Tasks", () => {
  beforeAll(async () => {
    await prisma.task.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
      data: { name: "Test User", email: "test@example.com" },
    });

    await prisma.task.createMany({
      data: [
        { title: "Task 1", description: "Task 1 description", userId: user.id },
        { title: "Task 2", description: "Task 2 description", userId: user.id },
      ],
    });
  });

  it("should list all tasks for the user", async () => {
    const res = await app.request("/tasks?userId=1");

    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data).toHaveLength(2);
    expect(data[0]).toHaveProperty("title");
  });

  it("should create a new task", async () => {
    const res = await app.request("/tasks", {
      method: "POST",
      body: JSON.stringify({ title: "Task 3", description: "Task 3 description", userId: "1" }),
    });

    expect(res.status).toBe(201);
  });
});
