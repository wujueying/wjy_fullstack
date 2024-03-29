import React from 'react';
import {renderRoutes} from 'react-router-config'
import {NavLink} from 'react-router-dom'
import {Top,Tab,TabItem} from './style'  // styled component html css 为主


function Home(props) {
    const {route} = props;
    console.log(route);
    return (
        <div>
        <Top>
            <span className="iconfont menu">&#xe65c;</span>
            <span className="title">网易云音乐</span>
            <span className="iconfont search">&#xe62b;</span>
        </Top>
        <Tab>
            <NavLink to="/recommend" activeClassName="selected">
                <TabItem>
                    <span>推荐</span>
                </TabItem>
            </NavLink>
            <NavLink to="/singers" activeClassName="selected">
                <TabItem>
                    <span>歌手</span>
                </TabItem>
            </NavLink>
            <NavLink to="/rank" activeClassName="selected">
                <TabItem>
                    <span>排行榜</span>
                </TabItem>
            </NavLink>
        </Tab>
        {renderRoutes(route.routes)}
        </div>
    )
}

export default React.memo(Home);