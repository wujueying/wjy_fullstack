// console.log("Hello world".split("")[0].toUpperCase().charAt(0)+"Hello world".slice(1))
function generateHashtag(str){
    // 'hello world'  'Hello World'
    return str.length > 140 || str === ''? false:'#' +
    str.split(' ').map(capitalize).join(' ')
}
//     let arr = [];
//     str
//        .split(' ')
//        .forEach(item => {
//             // console.log(item);
//             arr.push(item.charAt(0).toUpperCase() + item.slice(1))
//        })
//     //    console.log(arr);
//     return arr.join('')
// }
// map 的 callback
function capitalize(item){
    return item.charAt(0).toUpperCase() + item.slice(1)
}
console.log(generateHashtag('hello world'));