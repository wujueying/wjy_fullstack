import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux'; 
import store from './store/store';
import './index.css';
import App from './App.js';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)