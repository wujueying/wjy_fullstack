nv, 一台电脑多node 版本管理  作业
nvm list
nvm use v15.7.0

- vite 正在干掉webpack 
  快  vue3 
  :3001 前端项目  react
- ：3000 music sdk  API服务
  允许跨域访问  即端口不一样 
- 前后端分离
  :3000/banner 展示到页面上 
  [{
      imageUrl:
  }]

  1. axios  API  从后端到前端src/api :3000/banner
    API 模块 /banner  =>  请求后端
    /singers  歌手列表
  2. store action getBannerList 
    axios API 
  3. 组件

- redux 引入的标准流程
  将单一状态树引入组件开发流程

  1. 安装
    redux-thunk  是支持异步action操作的中间件
  2. 目录  store
    export default store
    createStore(reducer)
    reducer  比较复杂的， 可以是模块化的 combineReducers
    applyMiddlewares  中间件服务 redux-thunk  redux-log..
  3. reducer 过日子业务
    - 形式  纯函数  返回状态 
    - 放到哪里  store/
      
