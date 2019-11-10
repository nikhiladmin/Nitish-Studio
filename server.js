const express = require('express');
const ejs = require("ejs");


const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.listen(port,function(){
    console.log('Server started at 3000');
});



app.get('/',function(req,res){
    res.render("home");
});

app.get('/booknow',function(req,res){
    res.render('booknow');
});