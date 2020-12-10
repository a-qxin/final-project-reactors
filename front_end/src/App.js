import React from 'react';
import { Switch, Redirect, useLocation } from 'react-router-dom';

import PrivateRoute from './pages/PrivateRoute';

import Home from './pages/Home';
import NewListing from './pages/NewListing';
import ViewListing from './pages/ViewListing';


const App = () => {
  const bg = {
    background: '#FDEAC3',
  };

  const { pathname } = useLocation(); 

  return (
    <div className="App" style={bg}>

      <div className='title'>
        <h2>reactorsHub</h2>
      </div>

      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <PrivateRoute 
          exact 
          path="/" 
          component={Home} 
        />
        <PrivateRoute 
          exact 
          path="/newlisting" 
          component={NewListing} 
        />
        <PrivateRoute 
          exact 
          path="/viewlisting" 
          component={ViewListing} 
        />

        {/* <Route path="/account" component={Account} /> */}
        <Redirect from="*" to="/" />
        <Home />

      </Switch>
    </div>
  );
};

export default App;
