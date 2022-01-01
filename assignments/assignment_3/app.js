const express = require('express');
const faker = require("faker");
const app = express();
const port = 3000;

let bodyParser = require('body-parser');

app.use(express.static("public"));
let users = []

for (let i =0;  i < 5; i++){
  users.push({
     name : faker.name.findName(),
     email : faker.internet.email(),
     image : faker.image.image(),
  })
}

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index",  {users})
})

app.get('/form', (req, res) => {
  res.render("form",  {users})
})
app.post('/user/add', (req, res) => {
  users.push({
    name: req.body.name,
    email: req.body.email,
    image: faker.image.image()
  })
  res.redirect("/")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})