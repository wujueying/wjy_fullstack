import {createElement, render ,renderDOM  } from './element';
import diff from './diff';
// DOM -> VirtualDOM
// 在内存之中创建， 模拟真实DOM的层次， 节点， 属性， 子节点
// 树  递归  最后结点是文本结点的时候就退出
// 相同的操作 1. 创建结点   2. 设置属性  3. 子节点

<ul class="list">
    <li class="item">wjy</li>
    <li class="item">易烊千玺</li>
</ul> 

// DOM 树的表达转换形式 
let virtualDOM = createElement('ul', {
  class:'list',
}, [
  createElement('li',{
    class:'item'
  },['wjy']),
  createElement('li',{
    class:'item'
  },['易烊千玺']),
])

console.log(virtualDOM);
let el = render(virtualDOM);
// console.log(el,'-----');

// let virtualDOM2 = createElement('ul',{
//   class:'list-group'
// },[
//   createElement('li',{class:'item active'},['七里香']),
//   createElement('li',{class:'item'},['一千年以后']),
//   createElement('li',{class:'item'},['菊花台']),
// ]);

renderDOM(el,document.getElementById('root'));
// 补丁 
// let patches = diff(virtualDOM,virtualDOM2);
// // console.log(pathes);
