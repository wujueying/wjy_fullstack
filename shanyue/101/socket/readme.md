1. 安装node 的开发框架，  express 
   - 引入express  require（‘express’）
   - app = express（）中小应用适合用node
   - http服务 简单， 传输完就断开的 简单协议
   - app.get('/',(req,res)=>{
       res.send('')
   })
   - 101 协议的跳转？ 比较复杂， 聊天室。websocket
     不要断开， 我要一直保持链接， websocket 新的协议
     聊天室是http协议无法实现的， 
   - app.listen(:port)