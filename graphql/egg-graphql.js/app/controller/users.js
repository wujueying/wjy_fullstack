const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = {limit: 10,offset: 0} // 翻页 
        ctx.body = await ctx.model.User.findAll(query);
    }

    async create() {
        const ctx = this.ctx;
        const {name, age} = ctx.request.body;
        const user = await ctx.model.User.create({name,age})
        ctx.status = 201;
        ctx.body = user;
    }
}

module.exports = UserController;