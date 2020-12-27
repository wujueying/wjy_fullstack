/**
 * @author wjy
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */
const isTypeof = (o,type) => {
    if(['number','boolean','string','function'].indexOf(type)>0){
        return typeof o === type
    }
   return Object.prototype.toString.call(o).toLowerCase().indexOf(type) > 0
    
  }
      
// let a = () => {}
// let a ="Hello";
// let a ;
let a = null;  // 宁缺
// array
// null array 是有问题的
// console.log(typeof a);
console.log(isTypeof(a,'null'));