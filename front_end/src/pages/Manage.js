import React from 'react';
import ListingsByAuthor from './ListingsByAuthor.js';
import { useHistory } from 'react-router-dom';
import { useSelector, /*useDispatch*/ } from 'react-redux';
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
  // const messageText = {
  //   fontWeight: 'normal',
  //   padding: '10px 0',
  // };
  const newMessageText = {
    fontWeight: '600',
    padding: '10px 0'
  };

  const userId = useSelector(state => state.userReducer.userId);
  // const authorId = '5fc327197fc6c32afe536c50';
  const [inquiries, setInquiries] = React.useState([]);
  const [myInquiries, setMyInquiries] = React.useState([]);
  let history = useHistory();

  function getMessage(listingId) {
    history.push('/message', { listingId: listingId });
  }

  function showInquiries() {
    let data = qs.stringify({
      'userId': userId,
      // 'authorId': authorId,
    });

    let config = {
      method: 'post',
      url: '/inquiry/getByAuthorId',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        setInquiries(response.data);
        console.log(inquiries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function showMyInquiries() {
    let data = qs.stringify({
      'userId': userId,
    });

    let config = {
      method: 'post',
      url: '/inquiry/getByUserId',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        setMyInquiries(response.data);

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleWebSocketInquiries = (rawData) => {
    const data = JSON.parse(rawData.data);
    console.log(data);
    showInquiries();
    showMyInquiries();
  };

  React.useEffect(() => {
    showInquiries();
    showMyInquiries();
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
              <div>{inquiries.map((inquiry, i) => (
                <div onClick={() => getMessage(inquiries.userId)} style={{ display: 'flex', fontWeight: 'bold' }} key={i}>
                  {/* <div id='threeCol'>
                    <h3 style={newMessageText}>
                      {inquiry.userName}
                    </h3>

                  </div>

                  <div id='threeCol'>
                    <h3 style={newMessageText}>{inquiry.title}</h3>
                    <hr />
                  </div>
                  <div id='threeCol'>
                    <h3 style={newMessageText}>{inquiry.message}</h3>
                    <hr />
                  </div>
                  <hr /> */}
                  <div style={{ display: 'flex', flexWrap: 'wrap' }} className="row">
                    <div id='threeCol' className="col" style={newMessageText}> {inquiry.userId} </div>
                    <div id='threeCol' className="col" style={newMessageText} >{inquiry.title}</div>
                    <div id='threeCol' className="col" style={newMessageText}>{inquiry.message}</div>
                  </div>
                </div>
              ))}

              </div>
              <div>{myInquiries.map((inquiry, i) => (
                <div onClick={() => getMessage(myInquiries.userId)} style={{ display: 'flex', fontWeight: 'bold' }} key={i}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }} className="row">
                    <div id='threeCol' className="col" style={newMessageText}> {inquiry.author} </div>
                    <div id='threeCol' className="col" style={newMessageText} > {inquiry.title}</div>
                    <div id='threeCol' className="col" style={newMessageText}>{inquiry.message}</div>
                  </div>
                  <hr className='hr' />
                </div>
              ))}

              </div>

            </div>

          </div>
        </div>

        <div>
          <div className='title'>
            <h2>Manage Listings</h2>
          </div>
          <div>
            <ListingsByAuthor id='listingItem' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Manage;
