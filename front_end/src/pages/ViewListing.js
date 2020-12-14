import React from 'react';

import defaultImage from '../assets/defaultimage.svg';

import { useSelector, useDispatch } from 'react-redux';
import { makeInquiry } from '../redux/actions/inquiryActions';
//import Axios from 'axios';

const ViewListing = () => {
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
  const message = useSelector(state => state.inquiryReducer.message); 

  function sendInquiry(){
    console.log(`Message sent to seller : ${message}`);

    // let data = qs.stringify({
    //   'inquiry' : inquiry
    // });

    // let config = {
    //   method: 'post',
    //   url: '/message',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: data
    // };

    // Axios(config)
    //   .then(function (response){
    //     console.log(JSON.stringify(response.data));
    //     console.log(response.status);
    //     dispatch(makeInquiry(inquiry));
    //     //redirect
    //     window.location.href = '/';
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // //send the request
  }
  /* React ends here */

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