import React from 'react';

import Home from './pages/Home';
// import About from './pages/About';

import { Switch, Route, Link } from 'react-router-dom';

const App = () => {
  const bg = {
    background: '#FDEAC3',
  };
  return (
    <div className="App" style={bg}>
      <nav>
        <Link to="/home">Home</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>
      <Switch>
        <Route path="/home" component={Home} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </div>
  );
};

export default App;
