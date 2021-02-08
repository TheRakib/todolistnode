const Todo = require("../models/todo");

const deleteTodo = async (req, res) => {
    try {
        await Todo.deleteOne({_id: req.params.id})
        console.log("Deleted todo successfully")
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
}

module.exports = deleteTodo;