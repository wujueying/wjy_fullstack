const express = require('express');
const app = express();
const path = require('path');
// 引入数据库 M V C 
const Redis = require('ioredis');
const { fstat } = require('fs');

const redis = new Redis({  
      port:6379,
      host: '127.0.0.1'
})
// 内存数据库 redis  比MySQL快
// let count = 0;  
// 引入模板  JSX 
// ejs 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
// 
app.get('/', async(req, res) => {
    // res.send('hello');  
    // 当用户来的时候，内存中，去到文件里 index.html  
    // fs  模块  fs.readFile  I/O  异步？ node    
    // fs.readFile
    // 文件支持流操作 
    let count = Number(await redis.get('count') || 0);
    count++;    
    await redis.set('count', count);
    res.render('index', { count: count });
    // fs.createReadStream('./index.html').pipe(res); 
})
app.listen(1234);