import React from 'react';
import { Link } from 'react-router-dom';
import signupcat from '../assets/signupcat.svg';

const SignUp = () => {
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

  return(
    <div style={mainContainer}>
      <img src={signupcat} style={image}/>

      <div style={verticalHr}></div>

      <div style={rightContainer}>
        <h1>New to reactorsHub?</h1>
        <h3>Enter the following details to create an account.</h3>
        <br></br>
        <h4>Already have an account? <Link exact to='/signin'><u>Click here</u></Link></h4>

        <div style={fields}>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Name:</h2>
            <input style={inputField} type='text' name='name' />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Email:</h2>
            <input style={inputField} type='email' name='email' />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Password:</h2>
            <input style={inputField} type='password' name='password' />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Re-Password:</h2>
            <input style={inputField} type='password' name='password' />
          </div>
        </div>

        <button className='yellow-btn'>Sign Up</button>

      </div>

    </div>
  );
};

export default SignUp;