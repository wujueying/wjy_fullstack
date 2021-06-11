/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1622011540308_1477';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  
    config.mysql = {
      // database configuration 
      client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '3318509jue', 
      // database
      database: 'react_blog',
      },
  // load into app, default is open 
      app: true,
  // load into agent, default is close 
      agent: false,
  };

  config.cors = {
    // origin:'*',
    origin: 'http://localhost:3000',
    credential:true,//允许cookie跨域  
    allowMethod: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  config.security={
    csrf:{
      enable: false
    },
    domainWhiteList:['*']
  };
  
  return {
    ...config,
    ...userConfig,
  };
};
