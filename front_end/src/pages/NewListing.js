import React from 'react';

// import Listing from './Listing.js';
import defaultImage from '../assets/defaultimage.svg';

const NewListing = () => {
  const center = {
    width: '1300px',
    margin: 'auto',
  };
  const pageContainer = {
    background:'#fef3da',
    margin: '0 0 140px 0',
    padding: '60px 60px',
    borderRadius: '40px',
  };
  const verticalHr = {
    width: '1px',
    background: '#707070',
  };

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>
          <div><h1>Create a new listing!</h1></div>

          <div style={{ display: 'flex', alignItems:'center', justifyContent:'center', padding:'50px 0'}}>
            <div>
              <div>
                <img src={defaultImage} width="150px" alt='defaultImage' />
              </div>
              <div>
                <button className='button'>Add a picture</button>
              </div>
            </div>

            <div style={verticalHr}></div>

            <div>
              <h2>Title:</h2>
              <h2>Year:</h2>
              <h2>Status:</h2>
              <h2>Location:</h2>
              <h2>Price:</h2>

            </div>

          </div>

          <div>
            <button className='button'>Create listing</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewListing;
