function Person(name){ // 构造函数 火车头
  this.name = name
}

Person.prototype.sayHello=function(){
    return 'hello,I am '+this.name
}

const kevin = new Person('Kevin');
console.log(kevin.sayHello());

// Person('kevin');
console.log(Object.keys(Person.prototype))
console.log(Object.getOwnPropertyNames(Person.prototype))