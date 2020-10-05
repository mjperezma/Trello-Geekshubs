import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './service/redux/Store';
import './index.css';
import App from './components/App.jsx';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);
