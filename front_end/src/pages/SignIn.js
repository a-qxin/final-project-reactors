import React from 'react';
import signinguy from '../assets/signinguy.svg';

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
  

  return(
    <div style={mainContainer}>
      <img src={signinguy} style={image}/>

      <div style={verticalHr}></div>

      <div style={rightContainer}>
        <h2>Welcome back to reactorsHub!</h2>
        <h3>Enter your email and password.</h3>
        <br></br>
        <h4>New to reactorsHub? <a href="#"><u>Click here</u></a></h4>

        <div style={fields}>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Email:</h2>
            <input style={inputField} type='email' name='email' />
          </div>
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Password:</h2>
            <input style={inputField} type='password' name='password' />
          </div>
        </div>

        <button className='yellow-btn'>Sign In</button>

      </div>

    </div>
  );
};

export default SignIn;