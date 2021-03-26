// 负责模块的路由， 
import express from 'express';
import * as postController from './post.controller';
const router = express.Router(); 
// GET  获得

/**
 * 创建内容
*/
router.post('/posts',postController.store)


/**
 * 获取文章列表
*/
// router.get('/posts')

export default router;