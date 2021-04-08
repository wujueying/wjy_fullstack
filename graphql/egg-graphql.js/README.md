全栈能力还有一个月左右完备， 
mysql + ts + egg.js(企业级) + graphql + redis + node 一线以上实习实战能力的
企业级的node 框架的一些后端素养

面试的时候可以吹水， 

后端node /api开发， Restful
一切皆资源， 资源的状态转换 名词， CRUD 不同的HTTP动词来对应  
但是， 虽然现在还是主流，已经有代替方案，更懂前端数据需求的GraphQL来了 
洁癖 

1. egg.js + mysql CRUD 做出来  RESTFUL  /users  用户列表
  - mysql的驱动  plugins 非常好， 
    mysql2 更方便的驱动mysql
    sequelize cli 从生成表到数据迁移  ->  model的合成
2. egg.js + graphql 做的更漂亮 


- 以插件及配置的方式， 将mysql的操作交给了sequelize 来处理 
- 数据库创建
- 数据迁移， 建表， 加种子数据， 都不需要写sql
  加速  我们要会mysql，但是还是要交给专业的数据库工程师DBA 
  sequelize 可以让我们更加规范数据库的操作流程，且更简单 
- sequelize-cli 规范数据库迁移的工作 
  命令行工具， 写命令 

- 数据库开发的时候， 建表 加点数据 模型文件 mvc  
  sequelize  规范  migrations 一切操作留下痕迹， 以后有没有加字段， 为什么要加 git 一样留下版本  
- sequelize 有几步
  init:config 初始化得到配置文件
  init:migrations migrations文件夹

npx sequelize migration:generate --name=init-users   
  数据库迁移， 加表，加字段
npx sequelize db:migrate  执行迁移
  只要复制，创建表 只要写 JSON就可以  

  