import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import history from './components/Shared/history';
import reducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import "antd/dist/antd.css";
import fontawesome from './assets/css/font-awesome.min.css';
import generalStyle from './assets/css/general-style.css';
import general from './assets/css/general.css';
import style from './assets/css/style.css';
import styleCopy from './assets/css/styleCopy.css';
import menucomponent from './assets/css/menucomponent.css';

const middleware = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App>
        <link href={style} rel="stylesheet" type="text/css" />
        <link href={styleCopy} rel="stylesheet" type="text/css" />
        <link href={general} rel="stylesheet" type="text/css" />
        <link href={generalStyle} rel="stylesheet" type="text/css" />
        <link href={fontawesome} rel="stylesheet" type="text/css" />
        <link href={menucomponent} rel="stylesheet" type="text/css" />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

