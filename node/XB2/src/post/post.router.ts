<<<<<<< HEAD
import express from 'express';  // es6 
import * as postController from './post.controller';

const router = express.Router(); // 得到一个路由实例
// restful  某文章
// 模块化  只负责定义路由， 
router.get('/posts/:postId', postController.show);

=======
import express from 'express';  // es6 
import * as postController from './post.controller';

const router = express.Router(); // 得到一个路由实例
// restful  某文章
// 模块化  只负责定义路由， 
router.get('/posts/:postId', postController.show);

>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
export default router;