const express = require("express");
const {
  addTodoCtrl,
  fetchTodoCtrl,
  deleteTodoCtrl,
  updateTodoCtrl,
} = require("../controller/todoController");

const todoRouter = express.Router();

todoRouter.post("/", addTodoCtrl);
todoRouter.get("/:id", fetchTodoCtrl);
todoRouter.delete("/:id", deleteTodoCtrl);
todoRouter.put("/:id", updateTodoCtrl);

module.exports = todoRouter;
