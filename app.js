const express = require("express");
const app = express();
const PORT = 8000;
const Host = "127.0.0.1";
const sendMail = require('./controller/sendMail');

app.get("/",(req,res)=>{
    res.send("<h1>hello this server</h1>");
})

app.get("/mail",sendMail);

app.listen(8000,()=>{
    console.log(`server is running at http://${Host}:${PORT}/`);
})