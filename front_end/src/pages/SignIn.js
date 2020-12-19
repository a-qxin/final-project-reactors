import React from 'react';
//import { Link, useHistory } from 'react-router-dom';
import signinguy from '../assets/signinguy.svg';
let axios = require('axios');
let qs = require('qs');

import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setPassword, setIsLoggedIn, setSeeSignUp, setSeeSignIn } from '../redux/actions/userActions';

const SignIn = () => {

  // let history = useHistory(); 

  const mainContainer = {
    height: '80vh',
    width: '90vw',
    display: 'flex',
    margin: 'auto',
  };

  const image = {
    width: '40vw',
    paddingRight: '5vw'
  };

  const verticalHr = {
    width: '1px',
    background: '#707070',
  };

  const rightContainer = {
    paddingLeft: '5vw',
    width: '40vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const fields = {
    marginTop: '5vh',
    marginBottom: '5vh'
  };

  const fieldContainer = {
    display: 'flex',
    margin: '20px 0'
  };
  const fieldTitle = {
    width: '225px'
  };
  const inputField = {
    width: '300px',
  };

  const dispatch = useDispatch(); // must be combined with an action
  const userName = useSelector(state => state.userReducer.userName);
  const password = useSelector(state => state.userReducer.password);

  // const isLoggedIn = useSelector(state => state.userReducer.setIsLoggedIn);

  function signInUser() {
    console.log(`Signing in user with \nUserName : ${userName} and password : ${password}`);

    let data = qs.stringify({
      'username': userName,
      'password': password
    });

    let config = {
      method: 'post',
      url: '/login',
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        dispatch(setIsLoggedIn(true));
        dispatch(setSeeSignIn(false));
        dispatch(setSeeSignUp(false));
        // redirect
        //  history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div style={mainContainer}>
      <img src={signinguy} style={image} />

      <div style={verticalHr}></div>

      <div style={rightContainer}>
        <h2>Welcome back to reactorsHub!</h2>
        <h3>Enter your username and password.</h3>
        <br></br>
        <h4>New to reactorsHub? <button onClick={() => { dispatch(setSeeSignUp(true)); dispatch(setSeeSignIn(false)); }}><u>Click here</u></button></h4>

        <div style={fields}>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Username:</h2>
            <input style={inputField} type='text' name='username' onChange={e => dispatch(setUserName(e.target.value))} />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Password:</h2>
            <input style={inputField} type='password' name='password' onChange={e => dispatch(setPassword(e.target.value))} />
          </div>
        </div>

        <button className='yellow-btn' onClick={() => signInUser()}>Sign In</button>

      </div>

    </div>
  );
};

export default SignIn;