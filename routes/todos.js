const router = require("express").Router();
const Todo = require("../models/todo");
const renderTodoList = require("../controller/rendertodocontroller");
const addNewTodo = require("../controller/addtodocontroller");
const doneOrNotTodo = require("../controller/donetodocontroller");
const editTodo = require("../controller/edittodocontroller");
const updateTodo = require("../controller/updatetodocontroller");
const deleteTodo = require("../controller/deletetodocontroller");

router.get("/", renderTodoList)

router.post("/", addNewTodo)

router.get("/complete/todo/:id", doneOrNotTodo)

router.get("/edit/todo/:id", editTodo)

router.post("/edit/todo/:id", updateTodo)

router.get("/delete/todo/:id", deleteTodo)

module.exports = router;