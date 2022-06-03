import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import rux from 'ruxjs'; // 暂时注释
console.log('rux :>> ', rux);
import './assets/styles/common.scss';

ReactDOM.render(React.createElement(App), document.getElementById('app'));
