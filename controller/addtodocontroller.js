const Todo = require("../models/todo");

const addNewTodo = async (req, res) => {
   
    try {
        const todo = req.body.todo;
        const newTodo = await new Todo({todo}).save()
        
        if( newTodo ) return res.redirect("back"); 

    } catch (err) {
        console.log(err);
        res.render("./partials/error.ejs", {err})
    }
}

module.exports = addNewTodo;