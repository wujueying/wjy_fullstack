export default {
    dva: {},
    antd: {},
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: 'helloworld',
                component: './HelloWorld'
            }
        ]
    }]
};