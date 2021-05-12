- react 全家桶 ， 全面react hooks 函数化编程
- 服务器端采用egg.js + ts + mysql 提供 API 服务
- 数据库的说明文件
    mysql 关系型  mongodb NoSQL js 区别？
    关系型业务适合mysql user post comment  
    mongodb 微博 表是collection 集合 JSON文件组成的 杂的数据，短视频
    数据库链接 egg.js 的config.js 
    redis 内存数据库 KV 90% 重复的
    内存中的
    文章列表   mysql2 -> 数据库  极大的IO开销
    第一次， 查  index_posts : [{},] -> redis    LRU  local Storage  

    
    后端程序和数据库是分离的，甚至再机器上是分离的
    mysql2 数据库驱动 model  egg.js 配置插件 

    koa/express  轻量级的node服务端开发框架 
    egg.js  企业级  标准， 对新手更友好，
    约定大于一切  看文档就好了。  

    post/login {name:'z',password:'12222'}  

    router.post('/login',authorization,(req,res)=>{
        数据的完整性...
        serverice(title,content)
    })
    
    - app.ts 7001  启动web服务
    - http 访问由中间件打理
        路由器中间件  匹配到路由地址后，  
        交给相应的controller  
        http.createServer((req,res) => {
            
        })
    - 校验表单  serverice 存储
    import Post model
    new Post save()

