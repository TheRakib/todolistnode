const Todo = require("../models/todo");

const renderTodoList = async (req, res) => {
    
    try {
        const sorted = +req.query.sorted || 1;
        const pages = +req.query.page || 1;

        const totalData = await Todo.find().countDocuments();

        const todosPerPage = 3;
        
        const totalDataPart = Math.ceil(totalData/todosPerPage);

        const todoToShow = todosPerPage * pages;

        const allTodo = await Todo.find().limit(todoToShow).sort({date: sorted});
        
        res.render("index", 
        { 
            todo: allTodo,
            pages,
            sorted,
            totalData,
            totalDataPart,
            todoToShow,
            todosPerPage
        });
    } catch (err) {
        console.log(err)
        res.render("./partials/error.ejs", {err})
    }
}

module.exports = renderTodoList;
