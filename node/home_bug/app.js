const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/info', function(req, res) {
    // 后端会在这里校验  
    let {data} =  req.query;
    if(!data){
        res.json({
            error: '参数有误'
        })
    }
    // console.log(data);  
    let obj = JSON.parse(data);
    console.log(obj);
    res.json({
        "546": obj[2].value.trim()
    })
})

app.listen(5000, ()=>{
    console.log('服务器启动了');
});

