<<<<<<< HEAD
const koa = require('koa')
const mount = require('koa-mount')
const serve=require('koa-static')
//静态文件static ->cdn 静态服务器 
const fs =require('fs')
const app = new koa();
console.log(__dirname+'/static/')
app.use(serve(__dirname+'/static/'))

app.use(
    mount('/',ctx =>{
        ctx.body = fs.readFileSync(__dirname+'/max_count.html','utf-8');
        
    })
)
=======
const koa = require('koa')
const mount = require('koa-mount')
const serve=require('koa-static')
//静态文件static ->cdn 静态服务器 
const fs =require('fs')
const app = new koa();
console.log(__dirname+'/static/')
app.use(serve(__dirname+'/static/'))

app.use(
    mount('/',ctx =>{
        ctx.body = fs.readFileSync(__dirname+'/max_count.html','utf-8');
        
    })
)
>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
app.listen(1234)