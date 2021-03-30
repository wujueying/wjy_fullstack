<<<<<<< HEAD
// 越大的项目， 越要模块化
import app from './app';  // 封装  升级写法
import { APP_PORT } from './app/app.config';
// 超强的模块化 
import {connection} from './app/database/mysql';


connection.connect(error => {
    if(error) {
        console.log('连接数据库服务失败',error.message);
        return ;
    }
    console.log('成功连接到数据库');
})


app.listen(APP_PORT, () => {
    console.log('服务已启动');
=======
// 越大的项目， 越要模块化
import app from './app';  // 封装  升级写法
import { APP_PORT } from './app/app.config';
// 超强的模块化 
import {connection} from './app/database/mysql';


connection.connect(error => {
    if(error) {
        console.log('连接数据库服务失败',error.message);
        return ;
    }
    console.log('成功连接到数据库');
})


app.listen(APP_PORT, () => {
    console.log('服务已启动');
>>>>>>> 6da7d2f51ab5f40cd7b50c2c80bba2eeeae640b6
})