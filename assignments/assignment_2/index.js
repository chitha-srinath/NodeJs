const http = require("http");
const fs = require("fs")
let data = fs.readFileSync("./index.html", 'utf-8')

http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("content-type","text/html");
    res.end(data);

}).listen(3000, ()=>{
    console.log("server running successfully")
});
