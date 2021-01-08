function Cat(name,color){
    // new的过程一定会执行Cat
    this.name = name;  // this?指向他实例
    this.color = color;
    // 内存 
    // return this
    // this.type = '猫科动物';
    // prototype 要生成的原因, 
    // this.eat = function() {
    //     console.log('小鱼干');
    // }
}
// 原型对象
Cat.prototype.eat = function(){
    console.log('小鱼干');
}
Cat.prototype.type = '猫科动物';
// static 静态
// Cat.eat = function(){
//     console.log('小鱼干');
// }

// 实例化
// ?new 的执行过程 
var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");

console.log(cat1.constructor == cat2.constructor);   // 构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);

 cat1.eat();