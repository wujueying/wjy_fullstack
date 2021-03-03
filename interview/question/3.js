var a = 0xa;  // 这是什么？  // 进制  8  16  0x
console.log(typeof a);
var b = 010 // 八进制 ？ 2进制？
var c = 0b01;  // 2进制 
console.log(c + 3)  // 十进制数
console.log(b + 19)
// 0.30000000004
// JS 浮点数不精确  0.3
// 1. JS 没有浮点数类型  Number     new Number() 不适合计算
// JS 转成二进制的时候 无限地循环   32  舍弃一些位
// 二进制位相加   不准确

console.log(0.1 + 0.2);  // 
console.log((8).toString(8));
console.log((0.1).toString(2));  // 传进制数
console.log((0.2).toString(2));


console.log(Number.parseInt('010',8));
console.log(Number.parseInt('20',2));  // 结果是？  NaN
// 跟什么相关？  上溢  大数字 BigInt
// JS Number类型只能安全地表达 -9007199254740991(-2(^53-1))

console.log(99999999999999999);  // 100000000000000000  ?
console.log(99999999999999999n);
console.log(900719925470992n === 9007199254740993n);  // 不安全
console.log(10 + 10n);




