import React from 'react';

import Home from './pages/Home';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const bg = {
    background: '#FDEAC3',
  };
  const nav = {
    textAlign:'center',
    padding:'60px'
  };
  const title = {
    fontSize:'28px', 
    fontWeight:'bold', 
    margin:'100px',
  };

  return (
    <div className="App" style={bg}>
      <nav style={nav}>
        <Link to="/home" style={title}>reactorsHub</Link>
      </nav>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
