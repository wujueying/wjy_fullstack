// node 
// 自定义事件 
const tecentTime = require('./tecentTime')
// 事件是如何实现的？  订阅，  发布者模式
tecentTime.on('newlesson',({price}) => {
    if(price < 80){
        console.log('ok, buy it');
    }
})