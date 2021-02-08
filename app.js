const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(require("./routes/todos"));

mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(5000, () => console.log("Server listening at port 5000"));