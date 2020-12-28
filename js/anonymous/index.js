// 事件执行函数, 叫什么名字无所谓
// addEventListener('click',()=>{

// });
// 函数定义,不适合匿名函数的使用场景
// function(){
  
// }
// 没有函数名，就会报错
// 驼峰式命名
// 立即执行函数 
let res = (function (foo,bar){       // 匿名函数  funcA就是名字  函数就是一个对象,可立即使用的对象
//   console.log(foo * bar);
  return foo*bar;
})(20,3);
console.log(res);
// foo,bar 值传过去  实参传给形参
// 交给外界怎么办?
