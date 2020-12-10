import React from 'react';

import defaultImage from '../assets/defaultimage.svg';

const ViewListing = () => {
  const center = {
    width: '1300px',
    margin: 'auto',
  };
  const pageContainer = {
    background: '#fef3da',
    margin: '0 0 140px 0',
    padding: '60px 60px',
    borderRadius: '40px',
  };
  const verticalHr = {
    width: '1px',
    background: '#707070',
  };
  const fieldContainer = {
    display: 'flex',
    margin:'20px 0'
  };
  const fieldTitle = {
    width:'170px'
  };
  const msgBox = {
    width:'500px',
  };

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>
          <div><h1>Bob&#39;s backyard reactor</h1></div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', }}>
            <div style={{ width: '600px', margin: 'auto', textAlign: 'center' }}>
              <div>
                <img src={defaultImage} width="150px" alt='defaultImage' />
              </div>
              <div style={{paddingTop:'30px'}}>
                <button className='button'>Add a picture</button>
              </div>
            </div>

            <div style={verticalHr}></div>


            <div style={{ width: '700px', margin: 'auto', paddingLeft: '100px' }}>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Year:</h2>
                <h2>1986</h2>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Status:</h2>
                <h2>Active</h2>
              </div>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Location:</h2>
                <h2>Chernobyl, Ukraine</h2>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Price:</h2>
                <h2>$69,420</h2>
              </div>

              <div>
                <input style={msgBox} type='text' name='inquiry' placeholder={'Write your message...'} />
              </div>
              
            </div>
          </div>

          <div style={{paddingBottom:'30px'}}>
            <div style={{float:'right'}}>
              <button className='yellow-btn'>Send message to seller</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewListing;