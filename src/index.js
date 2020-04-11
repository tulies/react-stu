import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk), // 异步执行用
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // 这个参数 为了redux插件用。
  ),
);

// const store = createStore(
//   reducers,
//   applyMiddleware(thunk),
// );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
