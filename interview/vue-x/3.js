const {h} = require('snabbdom');
// 返回VNode 比html字符串有什么好处？
// <div id="app"></div>  前端才生成组件  蜘蛛是拿不到内容的 
// html  VNode  内存  对象  ssr 服务器端渲染  SEO  React Native App 开发成为可能
const MyComponent = props => {
    return h('h1', props.title, [
        h('span', {style: {fontWeight: 'bold'}}, 'This is bold')
    ])
}

console.log(MyComponent({title: 'hello'}));
