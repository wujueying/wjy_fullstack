# promise
1. 含义：一个保存着某个未来才会结束的事件（异步操作）的容器
2. 用法：
        const promise = new Promise(function(resolve, reject) {
        // ... some code

        if (/* 异步操作成功 */){
            resolve(value);
        } else {
            reject(error);
        }
        });
         resolve函数：为将promise对象的状态从“未完成”变为“成功”,在异步操作成功时调用，成功后，将结果作为参数传递出去
         reject函数：将promise对象从未完成变为失败，在异步操作失败时调用，将报出的错误作为参数传递出去
         回调函数：传递一个参数化的函数，将这个函数作为一个参数传到另一个主函数里面，当那个主函数执行完之后，再执行传进去的作为参数的函数。走这个过程的参数化的函数叫做回调函数
    生成promise后，利用then方法指定resolved状态和rejected状态的回调函数     
            promise.then(function(value) {
        // success
        }, function(error) {
        // failure
        });