import React from 'react';

// import { useSelector } from 'react-redux';

import Listing from './Listing.js';

const Home = () => {
  const center = {
    width: '1300px',
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
    width:'500px',
    display:'flex',
    verticalAlign: 'center',
    margin:'auto',
    textAlign:'center'
  };
  const titleRightText = {
    fontWeight:'500',
    padding:'0 0 30px 0'
  };
  const titleRightSmallText = {
    fontWeight:'400',
    padding:'0 0 12px 0'
  };
  const verticalHr = {
    width: '1px',
    background:'#707070',
  };

  return (
    <div>
      <div>

        <div className='title'>
          <h2>reactorsHub</h2>
        </div>

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
                <button className='button' disabled>Create a new listing</button>
              </div>

              <div>
                <h4>Please sign in to create a new listing</h4>
              </div>
            </div>

            <div style={titleRightContainer}>
              <div>
                <div>
                  <h2 style={titleRightText}>New to reactorsHub?</h2>
                </div>
                <div>
                  <h4 style={titleRightSmallText}>Create an account</h4>
                </div>
                <div>
                  <button className='button'>Sign up</button>
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
                  <button className='button'>Sign in</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className='title'>
            <h2>Listings</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 10vw' }}>
            <div id='listingItem'>
              <Listing id='listingItem' />
            </div>
            <div id='listingItem'>
              <Listing id='listingItem' />
            </div>
            <div id='listingItem'>
              <Listing id='listingItem' />
            </div>
            <div id='listingItem'>
              <Listing id='listingItem' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
