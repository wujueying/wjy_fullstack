// 简单数据类型， 只能被替换， 不能被修改
// var str = 'I am hero';
// // len(str)  // php
// console.log(str.toUpperCase());
// console.log(str);
// immutable  不变的 

// const str = 'I am hero';
// str = str.toUpperCase();

const a = 5;
function A(b) {
    // 纯不纯在于会不会产生副作用
    // a++;
    // 
    return a + b;
}

console.log(A(5));