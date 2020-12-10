import React from 'react';

// import Listing from './Listing.js';
import defaultImage from '../assets/defaultimage.svg';

const NewListing = () => {
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
  const inputField = {
    width:'300px',
  };
  const yearField = {
    width:'54px'
  };

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>
          <div><h1>Create a new listing!</h1></div>

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
                <h2 style={fieldTitle}>Title:</h2>
                <input style={inputField} type='text' name='title' placeholder={'Bob\'s backyard reactor'} />
              </div>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Year:</h2>
                <input style={yearField} type='text' name='year' placeholder={'YYYY'} />
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Status:</h2>
                <input style={inputField} type='text' name='status' placeholder={'Active or Inactive'} />
              </div>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Location:</h2>
                <input style={inputField} type='text' name='location' placeholder={'Stalingrad, Russia'} />
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Price:</h2>
                <input style={inputField} type='text' name='price' placeholder={'$69,420'} />
              </div>
            </div>

          </div>

          <div style={{paddingBottom:'30px'}}>
            <div style={{float:'right'}}>
              <button className='yellow-btn'>Create listing</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewListing;
