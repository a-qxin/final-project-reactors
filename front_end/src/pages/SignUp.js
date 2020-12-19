import React from 'react';
//import { Link } from 'react-router-dom';
import signupcat from '../assets/signupcat.svg';
let axios = require('axios');
let qs = require('qs');

import { useSelector, useDispatch } from 'react-redux';
import { setUserName, setEmail, setPassword, setConfirmPassword, setIsLoggedIn, setSeeSignIn, setSeeSignUp } from '../redux/actions/userActions';

const SignUp = () => {
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
  const email = useSelector(state => state.userReducer.email);
  const password = useSelector(state => state.userReducer.password);
  const confirmPassword = useSelector(state => state.userReducer.confirmPassword);

  function registerUser() {
    console.log(`Registering user with \nUsername : ${userName} \nEmail : ${email}`);

    // front-end validation stuff

    let data = qs.stringify({
      'username': userName,
      'email': email,
      'password': password
    });

    let config = {
      method: 'post',
      url: '/register',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        dispatch(setIsLoggedIn(true));
        dispatch(setSeeSignIn(false));
        dispatch(setSeeSignUp(false));
      })
      .catch(function (error) {
        console.log(error);
      });
    // send the request
  }

  return (
    <div style={mainContainer}>
      <img src={signupcat} style={image} />

      <div style={verticalHr}></div>

      <div style={rightContainer}>
        <h1>New to reactorsHub?</h1>
        <h3>Enter the following details to create an account.</h3>
        <br></br>
        <h4>Already have an account? <button  onClick={() => {dispatch(setSeeSignUp(false)); dispatch(setSeeSignIn(true));}}><u>Click here</u></button></h4>

        <div style={fields}>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Name:</h2>
            <input style={inputField} value={userName} onChange={e => dispatch(setUserName(e.target.value))} />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Email:</h2>
            <input style={inputField} value={email} onChange={e => dispatch(setEmail(e.target.value))} />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Password:</h2>
            <input style={inputField} type='password' value={password} onChange={e => dispatch(setPassword(e.target.value))} />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Confirm Password:</h2>
            <input style={inputField} type='password' value={confirmPassword} onChange={e => dispatch(setConfirmPassword(e.target.value))} />
          </div>
        </div>
        {/* <button onClick={() => dispatch(setIsLoggedIn(true))}></button> */}
        {/* <button id="register-form-btn" className='yellow-btn' onClick={()=> dispatch(register())}>Sign Up</button> */}
        <button id="register-form-btn" className='yellow-btn' onClick={() => registerUser()}>Sign Up</button>
      </div>

    </div>
  );
};

export default SignUp;