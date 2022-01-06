const express = require("express");
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/todo');
var methodOverride = require('method-override')
const bodyparser = require("body-parser")

const todo = require("./model/Todo");
const bodyParser = require("body-parser");
const app = express();

app.use(methodOverride("_method"));
app.use(bodyparser());
app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", async (req,res)=>{
    let data = await todo.find()
    res.render("home", {data})
})
app.post("/todo/app", async (req,res)=>{
    res.redirect("/")
    await todo.create({
        todoname : req.body.name
    });
})
app.get("/todo/:id/complete", async(req,res)=>{
    await todo.updateOne({_id: req.params.id},{taskstatus: true})
    res.redirect("/");
})
app.get("/todo/:id/delete", async(req,res)=>{
    await todo.deleteOne({_id: req.params.id})
    res.redirect("/");
})

app.listen(3000, ()=>{
    console.log(`server listening at port : 3000`)
})