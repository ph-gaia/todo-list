import { Hono } from "hono";
import { TaskController } from "../controllers/task.controller";

const taskRoutes = new Hono();
const controller = new TaskController();

taskRoutes.get("/", (c) => controller.listTasks(c));
taskRoutes.post("/", (c) => controller.createTask(c));

export { taskRoutes };
