/**
 * 获得唯一ID
 * @author wjy
 * @date 11-21
 * @return{}
 */
const uniqueID = () => + new Date () +''+Math.ceil(Math.random()*1000)
// 类型转换
// return t + "" +ranNum;

console.log(uniqueID());
