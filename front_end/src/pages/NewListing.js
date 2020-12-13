import React from 'react';
let axios = require('axios');
let qs = require('qs');

import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setDescription, setStatus, setLocation, setPrice, setIsLoggedIn} from '../redux/actions/listingActions';


// import Listing from './Listing.js';
import defaultImage from '../assets/defaultimage.svg';

const NewListing = () => {
  const center = {
    width: '1300px',
    margin: 'auto',
  };
  const pageContainer = {
    // background: '#fef3da',
    background: 'rgba(255, 255, 255, 0.4)',
    margin: '0 0 140px 0',
    padding: '60px 60px',
    borderRadius: '40px',
  };
  const verticalHr = {
    width: '1px',
    background: '#707070',
    margin:'0 10px',
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

  const dispatch = useDispatch(); // must be combined with an action
  const title = useSelector(state => state.listingReducer.title);
  const description = useSelector(state => state.listingReducer.description);
  const status = useSelector(state => state.listingReducer.status);
  const location = useSelector(state => state.listingReducer.location);
  const price = useSelector(state => state.listingReducer.price);


  function createListing () {
    console.log(`Creating new listing with \nListin title : ${title} \nlocation : ${location} \nprice : ${price}`);

    // front-end validation stuff

    let data = qs.stringify({
      title: title,
      description: description,
      status: status,
      location: location,
      price: price,
    });

    let config = {
      method: 'post',
      url: '/create-listing',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        dispatch(setIsLoggedIn(true));
        // redirect
        window.location.href = '/';
      })
      .catch(function (error) {
        console.log(error);
      });
    // send the request
  }

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>
          <div><h1>Create a new listing!</h1></div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', }}>
            <div style={{ width: '599px', margin: 'auto', textAlign: 'center' }}>
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
                <input style={inputField} type='text' name='title' placeholder={'Bob\'s backyard reactor'} onChange={e => dispatch(setTitle(e.target.value))} />
              </div>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Description:</h2>
                <input style={yearField} type='text' name='description' placeholder={'Brand new'} onChange={e => dispatch(setDescription(e.target.value))} />
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Status:</h2>
                <input style={inputField} type='text' name='status' placeholder={'Active or Inactive'} onChange={e => dispatch(setStatus(e.target.value))} />
              </div>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Location:</h2>
                <input style={inputField} type='text' name='location' placeholder={'Stalingrad, Russia'} onChange={e => dispatch(setLocation(e.target.value))} />
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Price: $</h2>
                <input style={inputField} type='text' name='price' placeholder={'$69,420'} onChange={e => dispatch(setPrice(e.target.value))} />
              </div>
            </div>

          </div>

          <div style={{paddingBottom:'30px'}}>
            <div style={{float:'right'}}>
              <button className='yellow-btn' onClick={()=>createListing()}>Create listing</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewListing;
