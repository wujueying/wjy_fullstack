// main.ts 负责项目的启动
import app from './app';  // 模块化 的极致就是一个文件只做一件事
import {connection} from './app/database/mysql';
import {APP_PORT} from './app/app.config';
// app  路由 ， 上传文件， json化 ... 交给app 去做
// 数据库的连接 

app.listen(APP_PORT, ()=> {
    console.log('服务已启动');
})


connection.connect(error => {
  if(error) {
      console.log('连接数据库失败',error.message);
      return;
  }
  console.log('成功连接数据服务');
});