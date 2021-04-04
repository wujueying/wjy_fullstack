// for(var i=0;i<10;i++){
//     console.log("循环体中："+i);
// }
// console.log("循环体外："+i);

// // let 不会污染i  var 会

// const a="JSPANG";
// // a 是个常量，不可以再次用var来定义
// var a = "技术胖";
// console.log(a);

// 总结： var 全局声明 会污染web的区块
//       let  局部声明  
//       const  常量声明  声明了就不能改变


// 变量的解构赋值
// 1. 数组的解构
// let [a,[b,c]]=[0,[1,2]];
// console.log(a);
// console.log(b);
// console.log(c);

// let [foo='true']=[]; // 默认值为true
// console.log(foo);

// 对象的解构
// undefined  null
// let [a,b='技术胖']
// undefined是没值  null是有值的但是对象为空null

// let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
// console.log(foo + bar);

// let foo;
// ({foo} = {foo:'JSPang'}); // ()解构
// console.log(foo);

// 字符串的解构
// const [a,b,c,d,e,f]='JSPang78';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// 对象扩展运算符 ... 减少程序中的报错
// function jspang(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }

// jspang(1,2,3)

// let arr1=['www','jspang','com'];
// let arr2=arr1;
// console.log(arr2);
// arr2.push('shen');
// console.log(arr1);

// rest
// function jspang(first,...arg){
//     // console.log(arg.length);
//     for(let i = 0;i<arg.length;i++){
//         console.log(arg[i]);
//     }
// }
// jspang(0,1,2,3,4,5,6,7) // 7 first占一个数，后边的全是arg[] 

// function jspang(first,...arg){
//     for(let val of arg){
//         console.log(val);
//     }
// }

// jspang(0,1,2,3,4,5,6,7);
// // 以后可以用for of 的语法结构


