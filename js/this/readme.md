- 阮一峰 js

1. 函数this 调用方式，作用域|上下文环境相关
  函数作用域 scope 变量查找？ 
  内部查找 -》外部 闭包(函数嵌套函数)
<!-- 全局 -->
(function(){
    <!-- 上 -->
      return function(){
      <!-- 环境 -->
      <!-- 下 -->
      <!-- this   当前的运行环境 -->
      }
  })()

  - 差异的本质来自于this的使用
    函数运行时的所在环境 
    obj.foo  对象的方法
    foo  普通函数  运行方式-》所在的环境

  - 函数的运行环境由什么决定？
    ？

    原子级别 原理
    - 闭包 声明在哪里？  运行的方式
    ```js
      function(){
          let a = 1;
          return function(){
              console.log(a)
          }
      }
      const fun = funA();
    ```
    - 内存的骚操作 
      执行栈是内存的权力


      obj.foo() obj.foo  内存的指向的链条  this 指向对象
      foo = obj.fop;  value =》 地址交给了foo 
      foo();  普通函数
