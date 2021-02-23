import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom'

function Home(props) {
  //react-router-routes
  //嵌套路由
  // /rank/123

    const { route } = props;
    console.log(route);
    return (
        <div>Home
          <NavLink to="/recommend">recmmend</NavLink>
          <NavLink to="/rank">rank</NavLink>
          <NavLink to="/singers">sing</NavLink>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default Home;

