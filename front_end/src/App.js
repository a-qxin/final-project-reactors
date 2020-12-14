import React from 'react';
import axios from 'axios';
import { Switch, Redirect, useLocation, Link } from 'react-router-dom';
import PrivateRoute from './pages/PrivateRoute';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from './redux/actions/userActions';

import Home from './pages/Home';
import NewListing from './pages/NewListing';
import ViewListing from './pages/ViewListing';
import Manage from './pages/Manage';
import Message from './pages/Message';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation(); 

  function getSessionState() {
    let config = {
      method: 'get',
      url: '/getSessionState',
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));        
        if(response.data.username){
          console.log(response.data.username);
          dispatch(setIsLoggedIn(true));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getSessionState();
  });

  const bg = {
    background: '#FDEAC3',
  };

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
        <Redirect from="*" to="/" />
        <Home />
      </Switch>
    </div>
  );
};

export default App;
