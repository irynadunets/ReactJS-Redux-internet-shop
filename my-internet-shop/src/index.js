import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import './app.css'

import App from './containers/App';
//import './index.css';

import createStore from './store';
const store = createStore();
//import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
