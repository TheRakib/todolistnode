const Todo = require("../models/todo");

const editTodo = async (req, res) => {

    try {
        const sorted = +req.query.sorted || 1;
        const pages = +req.query.page || 1;

        const totalData = await Todo.find().countDocuments();

        const todosPerPage = 3;
        
        const totalDataPart = Math.ceil(totalData/todosPerPage);

        const todoToShow = todosPerPage * pages;

        const todo = await Todo.find({}).limit(todoToShow).sort({date: sorted})
        res.render("edit.ejs", 
        {
            todo:todo, 
            idTask: req.params.id,
            pages,
            sorted,
            totalData,
            totalDataPart,
            todoToShow,
            todosPerPage
        });
    } catch (err) {
        console.log(err)
        res.redirect("/")
    }
}

module.exports = editTodo;