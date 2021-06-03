export default {
    dva:{},
    antd:{},
    singular: true,
    routes:[{          // 手动配置路由
        path:'/',
        component:'../layout',
        routes: [{
            path: 'helloworld',
            component: './HelloWorld'
        }]
    }]
};