const express = require('express');
const app = express();
// 这是什么 process node 的内置对象  进程  前端的window
// 进程里面， 运行环境 env PORT 端口
// 如何从运行环境中拿到PORT的设置， 默认4000
// 环境

const port = process.env.PORT || 4000;
console.log(process.env.PORT)
app.get('/', (req, res) => res.send("hello world 队长 村长"))

app.listen(port,()=>console.log(`listening on port ${port}!`))