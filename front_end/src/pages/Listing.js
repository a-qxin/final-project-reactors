import React from 'react';
import defaultImage from '../assets/defaultimage.png';

const Listing = () => {
  const listingContainer = {
    textAlign:'center', 
    backgroundColor:'rgba(255, 255, 255, 0.4)', 
    width:'300px', 
    margin:'20px',
    padding:'50px 0 20px 0', 
    borderRadius:'30px',
  };

  return (
    <div>
      <div>
        <div style={listingContainer}>
          <img src={defaultImage} width="120px" alt='defaultImage'/>
          <h4>Smol Reactor</h4>
        </div>
      </div>
    </div>
  );
};

export default Listing;
