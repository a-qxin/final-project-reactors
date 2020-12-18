import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../redux/actions/userActions';
let axios = require('axios');

import Listing from './Listing.js';

const Home = () => {

  let history = useHistory();
  const dispatch = useDispatch(); // must be combined with an action
  const userId = useSelector(state => state.userReducer.userName);
  
  function signOut() {
    let config = {
      method: 'get',
      url: '/logout',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(setIsLoggedIn(false));

        // redirect
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);

  const center = {
    margin: 'auto',
  };
  const heroContainer = {
    background: 'rgb(255,231,98, 1)',
    background: '-moz-linear-gradient(90deg, rgba(255,231,98,1) 0%, rgba(247,196,67,1) 60%)',
    background: '-webkit-linear-gradient(90deg, rgba(255,231,98,1) 0%, rgba(247,196,67,1) 60%)',
    background: 'linear-gradient(90deg, rgba(255,231,98,1) 0%, rgba(247,196,67,1) 60%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffe762",endColorstr="#f7c443",GradientType=1)',
    margin: '0 0 140px 0',
    padding: '60px 60px',
    borderRadius: '40px',
    display: 'flex',
  };
  const titleButtonSpacing = {
    padding: '80px 0 10px 0'
  };
  const titleSpacing = {
    padding: '10px 0 0 0'
  };
  const titleRightContainer = {
    width: '500px',
    display: 'flex',
    verticalAlign: 'center',
    margin: 'auto',
    textAlign: 'center',
  };
  const titleRightText = {
    fontWeight: '500',
    padding: '0 0 30px 0'
  };
  const titleRightSmallText = {
    fontWeight: '400',
    padding: '0 0 12px 0'
  };
  const verticalHr = {
    width: '1px',
    background: '#707070',
  };
  const listingsContainer = {
    width: '1150px',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
  };
  const loggedInText = {
    fontWeight: '500',
  };

  return (
    <div>
      <div>

        <div style={center}>
          <div style={heroContainer}>
            <div>
              <div>
                <h1>Welcome to the reactorsHub!</h1>
              </div>

              <div style={titleSpacing}>
                <h3>Buy, sell, or trade premium quality reactors!</h3>
              </div>

              <div style={titleButtonSpacing}>
                {!isLoggedIn ? (<button className='button' disabled>Create a new listing</button>) :
                  (<Link className='button' to='/newlisting'>Create a new listing</Link>)}
              </div>

              {!isLoggedIn ? (<div>
                <h4>Please sign in to create a new listing</h4>
              </div>) : (<div></div>)}
            </div>

            {!isLoggedIn ? (<div style={titleRightContainer}>
              <div>
                <div>
                  <h2 style={titleRightText}>New to reactorsHub?</h2>
                </div>
                <div>
                  <h4 style={titleRightSmallText}>Create an account</h4>
                </div>
                <div>
                  <Link exact to='/signup' className='button'>Sign up</Link>
                </div>
              </div>

              <div style={verticalHr}></div>

              <div>
                <div>
                  <h2 style={titleRightText}>Already a member?</h2>
                </div>
                <div>
                  <h4 style={titleRightSmallText}>Log back in</h4>
                </div>
                <div>
                  <Link exact to='/signin' className='button'>Sign in</Link>
                </div>
              </div>
            </div>
            ) : (
              <div style={titleRightContainer}>
                <div style={verticalHr}></div>

                <div style={{ textAlign: 'start', padding: '40px 40px 40px 100px' }}>
                  <h1 style={loggedInText}> Hello {userId},</h1>
                  <h1 style={loggedInText}>Welcome back!</h1>
                  <div style={{ display: 'flex', padding: '20px 0 0 0' }}>
                    <Link exact to='/manage' className='button' style={{ margin: '0 10px 0 0' }}>Manage (#)</Link>
                    <button onClick={() => signOut()} className='button'>Sign Out</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        <div>
          <div className='title'>
            <h2>Listings</h2>
          </div>
          <div style={listingsContainer}>

            <div>
              <Listing />
            </div>
            

            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
