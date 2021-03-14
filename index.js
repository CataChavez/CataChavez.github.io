//imports
const express = require("express")
const exphbs = require("express-handlebars");
const Handlebars = require("handlebars");
const path = require("path");
const app = express();
require("dotenv").config();

//Server
app.listen(process.env.PORT || 3000, () => console.log("Server UP"))

app.use(express.static(__dirname + "/public"));

app.use("/assets", express.static(__dirname + "/assets"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "/views/mainLayout"),
    partialsDir: path.join(__dirname, "/views/components"),
  })
)

app.set("view engine", "handlebars");
Handlebars.registerHelper("formatDate", (fecha) => {
  let year = fecha.getFullYear();
  let month = fecha.getMonth() + 1;
  let day = fecha.getDate();
  let hours = fecha.getHours();
  let minutes = fecha.getMinutes();
  return `${day}/${month}/${year} ${hours}:${minutes}`;
});


//Routes
app.get("/", (req, res) => {
    res.render("UnderConstruction")
  })
  
