// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/86137/Desktop/antd-dva/node_modules/_@umijs_runtime@3.4.24@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('C:/Users/86137/Desktop/antd-dva/src/layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('C:/Users/86137/Desktop/antd-dva/src/page/HelloWorld').default,
        "exact": true
      },
      {
        "path": "/puzzlecards",
        "component": require('C:/Users/86137/Desktop/antd-dva/src/page/puzzlecards').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
