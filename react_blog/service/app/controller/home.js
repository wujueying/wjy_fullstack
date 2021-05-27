'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list(){
    const {ctx} = this;
    ctx.body = '<h1>jspang blog list</h1>'
  }
}

module.exports = HomeController;

// RESTful  APP 前后端分离，简单 约束性
// 请求方式 get  获取  post 新建 put 更新资源 delete 

