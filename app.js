const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")
const MongoStore = require("connect-mongodb-session")(session)
const MONGODB_URI = 'mongodb+srv://Arnav:superarnav@cluster0.s2mlu.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0';
const port = 3000;
const app = express();
const path = require("path")
const indexRoute = require("./routes/notes");
const errorRoute = require("./routes/error");

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.use(indexRoute)
app.use(errorRoute)

mongoose.connect(MONGODB_URI)
  .then(async () => {
    app.listen(port);
    console.log(`Running on ${port}`);
});

