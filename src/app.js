const path = require ("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const portNumber = process.env.port || 4000;

const sPath = path.join(__dirname , "../public");
const staticPath = path.join(__dirname , "../templates/views");
const partialPath = path.join(__dirname , "../templates/partials");


app.use(express.static(sPath));

app.set("view engine" , "hbs");
app.set("views" , staticPath);
hbs.registerPartials(partialPath);

app.get("/" , (req , res) =>{
    res.render("index");
})
app.get("/news" , (req , res) =>{
    res.render("news");
})
app.get("/photos" , (req , res) =>{
    res.render("photos");
})
app.get("/about" , (req , res) =>{
    res.render("about");
})
app.get("/single" , (req , res) =>{
    res.render("single");
})
app.get("*" , (req , res) =>{
    res.render("error");
})

app.listen(portNumber , () => {
    console.log(`App is listening to port number ${portNumber}`);
})