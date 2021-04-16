// 打造ctx 
let proto = {
//   url: request.url 
}

function defineGetter(prop,name) {
  prop.__defineGetter__(name, function() {
      return this[prop][name]  // this == ctx 
  })
}
         
defineGetter('request','url')  // url == request  
defineGetter('request','path')  

module.exports = proto

