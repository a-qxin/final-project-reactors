import React from 'react';

// import { useSelector } from 'react-redux';

import Listing from './Listing.js';

const Home = () => {
  const center = {
    width: '1300px',
    margin: 'auto',
  };
  const heroContainer = {
    background: 'rgb(255,231,98, 0.85)',
    background: '-moz-linear-gradient(90deg, rgba(255,231,98,.85) 0%, rgba(247,196,67,.85) 60%)',
    background: '-webkit-linear-gradient(90deg, rgba(255,231,98,.85) 0%, rgba(247,196,67,.85) 60%)',
    background: 'linear-gradient(90deg, rgba(255,231,98,.85) 0%, rgba(247,196,67,.85) 60%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffe762",endColorstr="#f7c443",GradientType=1)',
    margin: '0 0 100px 0',
    padding: '60px 60px',
    borderRadius: '40px',
    // width:'800px',
  };
  const titleSpacing = {
    padding:'60px 0 10px 0'
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

              <div>
                <h3>Buy, sell, or trade premium quality reactors!</h3>
              </div>

              <div style={titleSpacing}>
                <button className='button' disabled>Create a new listing</button>
              </div>

              <div>
                <h4>Please sign in to create a new listing</h4>
              </div>
            </div>

            <div>

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
