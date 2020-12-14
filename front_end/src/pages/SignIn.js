import React from 'react';
import { Link } from 'react-router-dom';
import signinguy from '../assets/signinguy.svg';

let axios = require('axios');
let qs = require('qs');

import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, setIsLoggedIn } from '../redux/actions/userActions';

const SignIn = () => {
  const mainContainer = {
    height: '80vh',
    width: '90vw',
    display:'flex',
    margin:'auto',
  };

  const image = {
    width: '40vw',
    paddingRight: '5vw'
  };

  const verticalHr = {
    width: '1px',
    background:'#707070',
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
    margin:'20px 0'
  };
  const fieldTitle = {
    width:'225px'
  };
  const inputField = {
    width:'300px',
  };
  
  const dispatch = useDispatch(); // must be combined with an action
  const email = useSelector(state => state.userReducer.email);
  const password = useSelector(state => state.userReducer.password);

  function signInUser() {
    console.log(`Signing in user with \nEmail : ${email}`);

    let data = qs.stringify({
      'email': email,
      'password': password 
    });

    // check if the email exists
    let config = {
      method: 'get',
      url: '/doesEmailExist', // /doesEmailExist/${email} ?
      data : data
    };

    // if email doesn't exist throw something?

    axios(config) 
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        // dispatch(setIsLoggedIn(true));
        // redirect
        // window.location.href = '/';
      })
      .catch(function (error) {
        console.log(error);
      });
    // send the request

    // if email does exist, login

    let config = {
      method: 'get',
      url: '/login',
      data : data
    };

    axios(config) // axios.get(URL/email)?
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        dispatch(setIsLoggedIn(true));
        // redirect
        window.location.href = '/';
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div style={mainContainer}>
      <img src={signinguy} style={image}/>

      <div style={verticalHr}></div>

      <div style={rightContainer}>
        <h2>Welcome back to reactorsHub!</h2>
        <h3>Enter your email and password.</h3>
        <br></br>
        <h4>New to reactorsHub? <Link exact to="/signup"><u>Click here</u></Link></h4>

        <div style={fields}>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Email:</h2>
            <input style={inputField} type='email' name='email' onChange={e => dispatch(setEmail(e.target.value))}/>
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Password:</h2>
            <input style={inputField} type='password' name='password' onChange={e => dispatch(setPassword(e.target.value))}/>
          </div>
        </div>

        <button className='yellow-btn' onClick={()=>signInUser()}>Sign In</button>

      </div>

    </div>
  );
};

export default SignIn;