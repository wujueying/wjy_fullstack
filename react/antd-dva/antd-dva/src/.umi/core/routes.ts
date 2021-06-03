// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/lesson/antd-dva/node_modules/_@umijs_runtime@3.4.24@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/lesson/antd-dva/src/layout').default,
    "routes": [
      {
        "path": "/helloworld",
        "component": require('/lesson/antd-dva/src/page/HelloWorld').default,
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
