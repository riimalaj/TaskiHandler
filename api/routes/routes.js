import { Router } from "../deps.js";
import * as todoApi from "./apis/todoApi.js";

const router = new Router();

router.get("/todos", todoApi.listTodos);
router.post("/todos", todoApi.addTodo);

router.post("/todos/:id/finish", todoApi.finishTodo);

export default router.routes();
