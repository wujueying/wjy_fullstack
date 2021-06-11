const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 4000;
const InitManager = require('./src/core/init');  
const app = new Koa();

app.use(
    bodyParser({
        enableTypes:['json', 'form', 'text']
    })
)
// 中间件 
InitManager.initCore(app)

app.listen(PORT, ()=>{
    console.log('is runing');
})
