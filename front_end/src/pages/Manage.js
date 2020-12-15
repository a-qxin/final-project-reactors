import React from 'react';
import Listing from './Listing.js';
//import { useSelector, /*useDispatch*/ } from 'react-redux';
//import { makeInquiry } from '../redux/actions/inquiryActions';
import webSocket from '../webSocket';
import axios from 'axios';
let qs = require('qs');


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
    fontWeight: '500',
  };
  const messageText = {
    fontWeight: 'normal',
    padding: '10px 0',
  };
  const newMessageText = {
    fontWeight: '600',
    padding: '10px 0'
  };
  const listingsContainer = {
    width: '1150px',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
  };
  
  //const authorId = useSelector(state => state.userReducer.userId);
  const authorId = '5fc327197fc6c32afe536c50';
  const [inquiries, setInquiries] = React.useState([]);

  function showInquiries() {
    let data = qs.stringify({
      'authorId': authorId,
    });

    let config = {
      method: 'post',
      url: '/inquiry/getByAuthor',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        setInquiries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleWebSocketInquiries = (rawData) => {
    const data = JSON.parse(rawData.data);
    console.log(data);
    showInquiries();
  };

  React.useEffect(() => {
    showInquiries();
    webSocket.onmessage = (inq) => handleWebSocketInquiries(inq);
  }, []);

  return (
    <div>
      <div>

        <div style={center}>
          <div style={heroContainer}>

            <div className='title' style={center}>

              <h2>Messages</h2>
              <br /><br />

              <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <div id='threeCol'>
                  <h3 style={messageTitle}>Name</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={messageTitle}>Title</h3>
                </div>
                <div id='threeCol'>
                  <h3 style={messageTitle}>Message</h3>
                </div>
              </div>

              <hr className='hr' />
              <div>
                {inquiries.map((inquiry, i) => (
                  <div onClick={() => window.location.href = '/message'} style={{ display: 'flex', fontWeight: 'bold' }} key={i}>
                    <div id='threeCol'>
                      <h3 style={newMessageText}>
                        {inquiry.message}
                      </h3>
                    </div>
                    <div id='threeCol'>
                      <h3 style={newMessageText}>{inquiry.title}</h3>
                    </div>
                    <div id='threeCol'>
                      <h3 style={newMessageText}>{inquiry.message}</h3>
                    </div>
                  </div>
                ))}
                <hr className='hr' />
              </div>



              <div style={{ display: 'flex', fontWeight: 'bold' }}>
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
