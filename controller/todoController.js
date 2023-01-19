const expressAsyncHandler = require("express-async-handler");
const Todo = require("../model/todo/todoModel");

const addTodoCtrl = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const data = await Todo.create({ todo: req.body.todo });
    res.json({ data, message: "Todo Added" });
  } catch (error) {
    res.json(error.message);
  }
});

const fetchTodoCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Todo.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});
const deleteTodoCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete(req.params.id);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});
const updateTodoCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const data = await Todo.findByIdAndUpdate(req.params.id, {
      todo: req.body.todo,
    });
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = { addTodoCtrl, fetchTodoCtrl, deleteTodoCtrl, updateTodoCtrl };
