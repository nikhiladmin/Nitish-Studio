const express = require('express');
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ =require("lodash");


const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/NitishStudio', {useNewUrlParser: true, useUnifiedTopology: true});

const contectSchema = { 
    name: String,
    email : String,
    phoneNo : Number,
    subject : String,
    message : String
}

const Contect = mongoose.model('Contects', contectSchema);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));

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

app.get("/login",function (req,res) {
    res.render("login");
  })

app.get("/bookform/:bookingtitle",function(req , res){
    book=req.params.bookingtitle;
    switch (book) {
        case "full-wedding":
            {
                res.render("booknow/bookform",{ 
                    bookingtitle : _.upperCase(book),
                    poster : "/image/photography/wedding/full-wedding.jpg",
                });

                break;
            }
        case "Engagement":    
            {
                res.render("booknow/bookform",{
                    bookingtitle : _.upperCase(book),
                    poster : "/image/photography/wedding/engagement.jpg"
                });
                break;
            }
        case "Reception":
            {
                 res.render("booknow/bookform",{
                     bookingtitle : _.upperCase(book),
                     poster : "/image/photography/wedding/reception.jpg"
                    });
                break;
            }
        default:
            break;
    }
    // res.render("booknow/bookform",{ bookingtitle : book });
});
app.post("/send",function(req,res){
    const name = req.body.name;
    const emailId = req.body.email;
    const phoneNo = req.body.phoneNo;
    const subject= req.body.subject;
    const message = req.body.message; 
    console.log(name +" "+emailId+" "+phoneNo+" "+subject+" "+message);

    const newContect = new Contect({
    name : name, 
    email : emailId,
    phoneNo :  phoneNo,
    subject : subject,
    message : message
    });

    newContect.save();
    setTimeout(function(){res.redirect("/");}, 3000);
    
});

app.get("/portfolio",function(req , res){
    res.render("portfolio/portfolio");
});

