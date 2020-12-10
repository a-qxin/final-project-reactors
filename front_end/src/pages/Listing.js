import React from 'react';
import defaultImage from '../assets/defaultimage.svg';

const Listing = () => {
  const listingContainer = {
    textAlign:'center', 
    backgroundColor:'rgba(255, 255, 255, 0.4)', 
    // width:'320px', 
    margin:'20px',
    padding:'70px 0 40px 0', 
    borderRadius:'30px',
  };
  const listingTitle = {
    margin:'30px'
  };

  return (
    <div>
      <div>
        <div style={listingContainer}>
          <a href="./ViewListing"><img src={defaultImage} width="150px" alt='defaultImage'/>
            <div style={listingTitle}>
              <h3>Smol Reactor</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Listing;
