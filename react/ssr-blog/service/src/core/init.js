const Router = require('koa-router');
const requireDirectory = require('require-directory');
class InitManager {
    static initCore(app){
        InitManager.app = app
        InitManager.initLoadRouters(app)
    }
    static initLoadRouters(app) {
        requireDirectory(module, `${process.cwd()}/src/routes`,{
            visit: function whenLoadModule(obj) {
                if (obj instanceof Router) {
                    app.use(obj.routes());
                    app.use(obj.allowedMethods());
                }
            },    
        }) 
    }
}

module.exports = InitManager 