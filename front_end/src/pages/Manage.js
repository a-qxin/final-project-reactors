import React from 'react';

import Listing from './Listing.js';

const Manage = () => {
  const center = {
    width: '1300px',
    margin: 'auto',
  };
  const heroContainer = {
    background: 'rgba(255, 255, 255, 0.4)',
    margin: '0 0 140px 0',
    padding: '60px',
    borderRadius: '40px',
    display: 'flex',
  };
  const messageTitle = {
    fontWeight:'500',
  };
  const messageText = {
    fontWeight:'normal',
    padding:'10px 0',
  };
  const newMessageText = {
    fontWeight:'600',
    padding:'10px 0'
  };
  const listingsContainer = {
    width: '1150px', 
    display: 'flex', 
    flexWrap: 'wrap', 
    margin: '0 auto',
  };

  return (
    <div>
      <div>

        <div style={center}>
          <div style={heroContainer}>

            <div className='title' style={center}>

              <h2>Messages</h2>
              <br /><br />

              <div style={{display:'flex', justifyContent:'space-between',}}>
                <div id='threeCol'>
                  <h3 style={messageTitle}>Name</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={messageTitle}>Date</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={messageTitle}>Message</h3>
                </div>
              </div>

              <hr className='hr' />

              <div style={{display:'flex', fontWeight:'bold'}}>
                <div id='threeCol'>
                  <h3 style={newMessageText}>Rick Harrison</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={newMessageText}>12/04/2020</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={newMessageText}>The best I can do is 100k and an old painting</h3>
                </div>
              </div>

              <hr className='hr' />

              <div style={{display:'flex', fontWeight:'bold'}}>
                <div id='threeCol'>
                  <h3 style={messageText}>Elon Musk</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={messageText}>12/01/20</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={messageText}>Fam! I’ll trade you a SpaceX rocket for this.</h3>
                </div>
              </div>
              
              <hr className='hr' />

            </div>

          </div>
        </div>

        <div>
          <div className='title'>
            <h2>Manage Listings</h2>
          </div>
          <div style={listingsContainer}>
            <div id='threeCol'>
              <Listing id='listingItem' />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Manage;
