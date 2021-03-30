import React from 'react';
import {Redirect} from 'react-router-dom'; // / -> Home
import Home from '../pages/Home';
import Recommend from '../pages/Recommend';
import Singers from '../pages/Singers';
import Rank from '../pages/Rank';

export default [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path:'/',            // 所有网站的根路径都是斜杠
                exact:true,
                render: () => (
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path:'/recommend',            
                component: Recommend
            },
            {
                path:'/singers',            
                component: Singers
            },
            {
                path:'/rank',            
                component: Rank
            },
        ]
    }
]