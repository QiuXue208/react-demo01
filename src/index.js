import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 渲染：将内容/代码显示到屏幕上
// 将App放到div容器中
let div = document.getElementById('root')
ReactDOM.render(<App />, div);

serviceWorker.unregister();
