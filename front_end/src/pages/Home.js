import React from 'react';

// import { useSelector } from 'react-redux';

import Listing from './Listing.js';

const Home = () => {
  return (
    <div>
      <div>
        {/* <h1>reactorsHub</h1> */}
        <div>
          <h3>welcome</h3>
        </div>

        <div>
          <Listing />
        </div>
      </div>
    </div>
  );
};

export default Home;
