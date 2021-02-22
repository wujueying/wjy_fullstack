// babel 也是可以写的，  源码分析篇

// 1. Person class -> function  new  普通调用报错？  
// 转义出的代码 不可能是class function
function _classCallCheck(instance,Constructor){
    if(!(instance instanceof Constructor)){
        throw new TypeError('Cannot call a class as a function')
    }
}

var Person = function(name){
    // es5 
    // 函数的运行方式， 不是new的方式 
    // this 不一样
    _classCallCheck(this,Person);  // 封装， babel webpack 工作流套件 把一些任务封装了 
    // if (this instanceof Person){  // 普通函数调用
    //     throw new TypeError('Cannot call a class as a function');
    // }
}
new Person();
Person();