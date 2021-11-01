require("dotenv").config();
const express = require("express");
const routes = require("./controllers/");
const sequelize = require("./config/connection");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//express.static() method is a built-in Express.js middleware function that can take all of the contents of a folder and serve them as static assets
app.use(express.static(path.join(__dirname, "public")));
//sets up Handlebars.js as apps template engine of choice
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
// turn on routes
app.use(routes);

// turn on connection to db and server
//! To reset the db force: true. Otherwise default to false.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
