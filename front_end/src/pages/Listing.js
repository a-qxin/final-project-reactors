import React from 'react';
import defaultImage from '../assets/defaultimage.svg';
//import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTitle, setDescription, setStatus, setLocation, setPrice, setListingId, setSeeViewListing } from '../redux/actions/listingActions';
import webSocket from '../webSocket';
import axios from 'axios';

const Listing = ({/*listingId*/ }) => {
  // let history = useHistory(); 
  const dispatch = useDispatch();

  const [listings, setListings] = React.useState([]);
  const listingContainer = {
    textAlign: 'center',
    margin: '20px 0px',
    // padding: '70px 0 40px 0',
    borderRadius: '30px',
    cursor: 'pointer',
    // display:'flex',
  };
  const listingTitle = {
    margin: '30px'
  };
  const handleWebSocketListing = (rawData) => {
    const data = JSON.parse(rawData.data);
    console.log(data);
    // switch (data.actionType) {
    //   case 'updateChatMessages':
    //     setChatMessages(data.chatMessages);
    //     break;
    //   default: break;
    // }
    getListings();
  };
  function getListings() {
    let config = {
      method: 'get',
      url: '/listing/getAllListings',
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setListings(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function selectListing(listing) {
    dispatch(setTitle(listing.title));
    dispatch(setDescription(listing.description));
    dispatch(setStatus(listing.status));
    dispatch(setLocation(listing.location));
    dispatch(setPrice(listing.price));
    dispatch(setListingId(listing._id));
    dispatch(setSeeViewListing(true));
    //history.push('/viewListing');
  }
  React.useEffect(() => {
    getListings();
    webSocket.onmessage = (m) => handleWebSocketListing(m);
  }, []);
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {listings.map((listing, i) => (
            <div id='threeCol' onClick={() => {  selectListing(listing); dispatch(setSeeViewListing(true)); }} style={listingContainer} key={i}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', margin: '0 20px', padding: '70px 0', borderRadius: '30px' }}>
                <img src={defaultImage} width="150px" alt='defaultImage' />
                <h3 style={listingTitle}>
                  {listing.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Listing;
