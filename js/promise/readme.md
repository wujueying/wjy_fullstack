# ES6 
 - js 的最新版本 
    传统的es5 + 最新的es6 + 版本
    1. ES6手册 ，阮一峰
    https://es6.ruanyifeng.com/
    2. ES6 15篇 
    
    ES6知识点通过大厂的审核
    通过阮一峰的ES6在线刷，每周看一篇冴羽老师的文章，

1. HTTP Server 
  live-server 启动， HTTP服务，双击打开一个页面 
  协议 http:// 
  fetch(url)  // Promise 的一个实例 
  .then(data =>{

  })  // 异步的,所以要等
  2. let p1 = new promise((resolve,reject) => {
     resolve(2)
  })  // 有费时的任务  不能同步
  3. p1.then()
  4. 同步
    一个CPU计算时间就可以快速执行完的指令 
    加减 变量称量 
  5. 异步， 多线程
        发端于耗时功能需求
        定时器以后发生 setTimeout
        Promise  天生就是Promise的 fetch
     resolve() 帮助异步任务被解决
     回到执行流 

     let p1 = new Promise();
     let p2 = new Promise();
     

