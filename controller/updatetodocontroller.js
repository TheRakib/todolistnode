const Todo = require("../models/todo");

const updateTodo = async (req, res) => {

    try {
        await Todo.updateOne({_id: req.params.id}, {todo: req.body.todo}, { runValidators: true })
        res.redirect("/")
    } catch (err) {
        console.log(err)
        res.redirect("back")
    }
}

module.exports = updateTodo;