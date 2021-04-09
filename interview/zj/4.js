var name = 'world!';
// var变量提升
(function(){

      if(typeof name === 'undefined'){
         let name = 'Jack';
          console.log('Goodbye ' + name);
      } else {
          console.log('Hello' + name);
      }
})()
