# Todo List with Node js

### Assignment from the course "Dynamic Webdevelopment" which focus on backend development, and using Node js especially.*

*Brief* 

* Create a todolist using Node js, Express & Mongo DB.
* Use EJS as html language.
* The user should be able to add, edit and delete todos. 
* Code should follow standard syntax and naming.
* Views, models and router should be in separate folders. 
* Everything should be uploaded to Git as it develops
* There should be pagination for different pages
* Users should be able to sort todos by date

Used in this project: Nodemon, Express, Mongoose, EJS, Dotenv

Order:
- Setup basic structure using folders for views, models, routes, public assets like css. 
- Use gitignore on .env and node_modules. 
- Connect to MongoDB using mongoose. 
- Create branch develop, from which all other branches will start. 

- Do the Schema in models/todo. 
- Create todos file in routes. Will be single file with only get/  post, as I use controller-files for the actual functions. 

- Create Controller folder, with all the controller-routes needed. Name the files basically for what they will do for ease of understanding. 

- Add the functions in the separate files, and link them to routes/todos by using require. 

- Add EJS files in views-folder. Also add folder with additional files, for partials and helpers. 

- Basic html setup in files Header & Footer, along with all necessary files to run bootstrap, google fonts, font awesome icons and css. 

- Add html/ejs to index, edit and error files. Index and edit are basically copies on each other, except for the update form available in edit. Error is for errormessage when trying to add todo with filling in input, or too short or too long message. 
