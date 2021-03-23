1. 引入ts写node， 模块化更优秀

- express @types/express  
- typescript  tsc-watch  实时的编译ts -> js  
- tsconfig.json  
- tsc-watch --onSuccess \"node dist/main.js\"  
  tsc-watch  会帮助编译dist 目录  
- 引入express 

1. 使用express创建web后端服务， 借助ts，全面es6化， 抛弃require，拥抱es6模块
2. 使用express 自带的路由创建路由中间件， 
3. 用户通过路由来到服务器，控制器接管一切
4. 控制器拿到用户请求和用户响应对象，将查询参数返回给用户
5. 以上都模块化， 一个文件一个模块 post  目录模块

.env 放着配置 -> dotenv 自动读取 -> 模块化config目录 -> app 
.gitignore .env 不上传
数据库密码会写到代码里去， 上传到GitHub  
  .env => .gitignore => dotenv.config() => process 