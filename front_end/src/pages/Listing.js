import React from 'react';
import defaultImage from '../assets/defaultimage.svg';

const Listing = ({/*listingId*/}) => {
  const listingContainer = {
    textAlign:'center', 
    backgroundColor:'rgba(255, 255, 255, 0.4)', 
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
          {/* Use links instead of <a> */}
          <a href="./viewListing"><img src={defaultImage} width="150px" alt='defaultImage'/>
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
