1. npx 创建react  ts 项目
2. 不同的需求项目结构如何，要清楚 
 - 简单  
 components + api + model(跨文件来取接口？
   ts 的自定义类型type 接口 model 
   1. API promise<MemberEntity[]>
   服务器端返回数据的类型
   2. 显示某一个用户 子组件
     props: MemberEntity 
 )
 - 全家桶  比较全面而复杂的应用时  SPA
 react/react-dom +
 react-router/react-router-dom +
 redux/react-redux|mobx 

 components+pages(store)+store+api+routes
  
 - 自定义构建流程 
 webpack babel

 - 全栈项目 
 egg.js + react + mysql 
 didi-frontend create-react-app
 didi-backend egg init 
 db migration(迁移) + database/table(索引) + seeds(初始化数据)  

 - SSR 项目 服务器端渲染
 SEO 掘金 
 SPA #root bundle.js 组件 + 数据状态 
 