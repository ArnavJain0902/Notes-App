require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session")
const MongoStore = require("connect-mongodb-session")(session)
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
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

