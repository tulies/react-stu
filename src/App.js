import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import List from './pages/List';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="header-nav">
          <NavLink to="/" exact>首页</NavLink>
          <NavLink to="/list">列表</NavLink>
          <NavLink to="/about">关于</NavLink>
        </div>
        <Route path="/" exact><Main /></Route>
        <Route path="/list" exact><List /></Route>
        <Route path="/about" exact><About /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
