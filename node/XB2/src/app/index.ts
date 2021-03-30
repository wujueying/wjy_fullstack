<<<<<<< HEAD
// 返回一个app
// require commonjs 
// ts  es6模块化没有任何问题
import express from 'express'; // es6 
// 引用路由模块 
import postRouter from '../post/post.router';

const app = express();
// 启用一个中间件  资源在哪里  
app.use(
    postRouter /*文章路由*/
)
=======
// 返回一个app
// require commonjs 
// ts  es6模块化没有任何问题
import express from 'express'; // es6 
// 引用路由模块 
import postRouter from '../post/post.router';

const app = express();
// 启用一个中间件  资源在哪里  
app.use(
    postRouter /*文章路由*/
)
>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
export default app;