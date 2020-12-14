import React from 'react';

import defaultImage from '../assets/defaultimage.svg';

import { useSelector, useDispatch } from 'react-redux';
import { makeInquiry } from '../redux/actions/inquiryActions';
import Axios from 'axios';
let qs = require('qs');

const ViewListing = () => {

  const urlParams = new URLSearchParams(window.location.search);

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
  const msgBox = {
    width:'500px',
  };

  /* React begins here */
  const dispatch = useDispatch();
  const inquiry = useSelector(state => state.inquiryReducer.message);
  const listing = useSelector(state => state.listingReducer);

  function sendInquiry(){
    console.log(`Message sent to seller : ${inquiry}`);

    let data = qs.stringify({
      'listingId' : listingId
    });

    let config = {
      method: 'post',
      url: 'http://localhost:5000/listing/getById',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    Axios(config)
      .then(function (response){
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        dispatch(makeInquiry(inquiry));
        //redirect
        window.location.href = '/';
      })
      .catch(function(error) {
        console.log(error);
      });
    //send the request
  }

  function getListing(){

    const listingId = urlParams.get('listingId');
    console.log(`The listing id is : ${listingId}`);

    let data = qs.stringify({
      'listingId' : listingId
    });

    let config = {
      method: 'post',
      url: '/listing/getById',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    Axios(config)
      .then(function (response){
        console.log(response);
        console.log(response.status);
        // set those state variables
        
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  React.useEffect( () => {
    getListing();
  }, []); 

  /* React ends here */

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>

          <div><h1>{listing.title}</h1></div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', }}>
            <div style={{ width: '600px', margin: 'auto', textAlign: 'center' }}>
              <div>
                <img src={defaultImage} width="150px" alt='defaultImage' />
              </div>
              <div style={{paddingTop:'30px'}}>
              </div>
            </div>

            <div style={verticalHr}></div>


            <div style={{ width: '700px', margin: 'auto', paddingLeft: '100px' }}>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Description: </h2>
                
                <h3>{listing.description}</h3>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Status:</h2>
                <h2>{listing.status}</h2>
              </div>

              <div style={fieldContainer}>              
                <h2 style={fieldTitle}>Location:</h2>
                <h2>{listing.location}</h2>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Price:</h2>
                <h2>{listing.price}</h2>
              </div>

              <div>
                <input style={msgBox} type='text' name='inquiry' placeholder={'Write your message...'} onChange={ e => dispatch(makeInquiry(e.target.value))}/>
              </div>
              
            </div>
          </div>

          <div style={{paddingBottom:'30px'}}>
            <div style={{float:'right'}}>
              <button className='yellow-btn' onClick={()=>sendInquiry()}>Send message to seller</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewListing;