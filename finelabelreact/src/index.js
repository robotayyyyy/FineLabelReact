import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {Provider}  from 'react-redux'
import store from './stores/store.js';

const app=<Provider store={store}> <App /> </Provider>
ReactDOM.render( app,  document.getElementById('root'));    