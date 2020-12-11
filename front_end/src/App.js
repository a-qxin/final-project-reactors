import React from 'react';
import { Switch, Redirect, useLocation, Link } from 'react-router-dom';

import PrivateRoute from './pages/PrivateRoute';

import Home from './pages/Home';
import NewListing from './pages/NewListing';
import ViewListing from './pages/ViewListing';
import Manage from './pages/Manage';
import Message from './pages/Message';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  const bg = {
    background: '#FDEAC3',
  };

  const { pathname } = useLocation(); 

  return (
    <div className="App" style={bg}>

      <div className='title'>
        <Link exact to='/'>
          <h2>reactorsHub</h2>
        </Link>
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
        <PrivateRoute 
          exact 
          path="/manage" 
          component={Manage} 
        />
        <PrivateRoute 
          exact 
          path="/message" 
          component={Message} 
        />
        <PrivateRoute 
          exact 
          path="/signUp" 
          component={SignUp} 
        />
        <PrivateRoute 
          exact 
          path="/signIn" 
          component={SignIn} 
        />

        {/* <Route path="/account" component={Account} /> */}
        <Redirect from="*" to="/" />
        <Home />

      </Switch>
    </div>
  );
};

export default App;
