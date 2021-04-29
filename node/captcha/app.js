const express= require('express')
const api =require('./api')
var app = express();
const path = require('path')
const cookieParase = require('cookie-parser');


app.use(cookieParase());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/captcha' ,(req,res)=>{
    api.createCaptcha(req,res)
})
app.get("/login",(req,res)=>{
    res.render('login',{

    })

})
var server = app.listen(8000)