var value = 1;
var obj = {};
Object.defineProperty(obj, "num", {
    configurable: true,
    enumerable:true,
    get: function(){          // 取值
        return value 
    },
    set: function(newValue){  // 设定值
        console.log('------数据修改了')
        value = newValue 
    }
})

console.log(obj.num); 
obj.num = 2; 
console.log(obj.num); 
// 属性描述符
// Object.defineProperty(obj, "num", {
//     value : 1,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });

//  对象 obj 拥有属性 num，值为 1
// console.log(obj.num);  
// obj.num = 2;
// console.log(obj.num);
