import React from 'react';

// import { useSelector } from 'react-redux';

import Listing from './Listing.js';

const Home = () => {
  return (
    <div>
      <div>

        <div className='title'>
          <h2>reactorsHub</h2>
        </div>

        <div>
          <div>
            <div>
              <h1>Welcome to the reactorsHub!</h1>
            </div>
            <div>
              <h3>Buy, sell, or trade premium quality reactors!</h3>
            </div>
          </div>
        </div>

        <div>
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
