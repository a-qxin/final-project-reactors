import React from 'react';

// import { useSelector } from 'react-redux';

import Listing from './Listing.js';

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h3>welcome</h3>
        </div>

        <div style={{textAlign:'center'}}>
          <div style={{display:'flex', flexWrap:'wrap'}}>
            <Listing />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
