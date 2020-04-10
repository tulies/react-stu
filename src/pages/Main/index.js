import React from 'react';

import logo from '../../assets/img/logo.svg';
import '../../assets/css/App.css';

// React.Component 和 React.PureComponent 有什么区别 -> https://segmentfault.com/a/1190000015575024
class Main extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/pages/main/index.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Main;
