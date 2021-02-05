const Todo = require("../models/todo");

const doneOrNotTodo = async (req, res) => {
    
    try {
        let todoId = req.params.id
        await Todo.findById(todoId).exec()
        .then((result) => {
            result.done = !result.done;
            return result.save();
        })
        .then((result) => {
            res.redirect("back")
        })
    } catch (err) {
        console.log(err)
        res.redirect("/");
    }
}

module.exports = doneOrNotTodo