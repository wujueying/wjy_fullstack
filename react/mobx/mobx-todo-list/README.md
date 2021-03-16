- url 在浏览器上输入之后， 发生了什么， 越详细越好
- 要在react 项目中完成article数据的展示， 该如何设计？
    article  model  mongodb  MySQL
    Article  组件 
    1. Storage 创建
    2. API 前后端
    3. 组件MVVN

    1. url 设计  
      /articles
      /articles/:id 
    2. react-router-dom
       router  配置  前端路由SPA  Single Page Application
    3. mobx 数据管理
       provider Store 做一个分支 Article  
       mobx observerable @action getArticles getArticlesById
    4. API
        后端API 在哪里？ 
    5. Article相关组件 @observe store 
      componentDidMount  


路由有多个模块
/users /articles  /goods
数据状态收到中央 什么状态都放在一个Store实例里，就会乱
仓库只能有一个，
<Provider store={store}>
</Provider>
 多模块 

 1. 前端启动路由
 <App /> 外面包一层 HashRouter HistoryRouter SPA
   :3000/#/  h  :3000/  history 
   /articles/:id
   :3000/#/article/dfd121 -> Route match 匹配到了

   component Article
   this.props.match.params.id