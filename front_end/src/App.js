import React from 'react';

import Home from './pages/Home';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const bg = {
    background: '#FDEAC3',
  };
  return (
    <div className="App" style={bg}>
      <nav>
        <Link to="/home">reactorsHub</Link>
      </nav>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
