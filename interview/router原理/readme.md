# 什么是前端路由？
  路由描述的是URL和UI之间的映射关系，这种映射关系是单向的，即URL变化引起UI更新，而且无需刷新页面

# 如何实现前端路由
  核心问题：
  1. 如何改变URL不引起页面的刷新
  2. 如何检测URL变化了
  
  - hash
        因为在浏览器url地址栏拼接哈希值本身就不会触发页面刷新，
        所以通过js拿到hash值的变更结果后可以动态的判断页面上要展示的HTML片段
  - history
     pushState  replaceState
     popstate  
    因为html5当中具备一个history对象，该对象中的pushState方法可以做到像URL拼接参数而不造成页面刷新,又因为history对象中的popstate方法可以支持我们监听到url的变化，所以，只需要将a标签默认的跳转事件阻止掉，借助pushState方法模拟url的跳转就能判断url变化动态决定要渲染的UI

