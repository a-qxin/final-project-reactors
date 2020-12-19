import React from 'react';
// import CancelIcon from '@material-ui/icons/Cancel';
let axios = require('axios');
let qs = require('qs');
import { useSelector, useDispatch } from 'react-redux';
import { setTitle,setSeeEditListing, setDescription, setStatus, setLocation, setPrice } from '../redux/actions/listingActions';
import defaultImage from '../assets/defaultimage.svg';
import '../assets/listing.css';


const EditListing = () => {

  const verticalHr = {
    width: '1px',
    background: '#707070',
    margin: '0 10px',
  };
  const fieldContainer = {
    display: 'flex',
    margin: '20px 0'
  };
  const fieldTitle = {
    width: '280px'
  };
  const inputField = {
    // width:'300px',
    width: '100%',
  };
  const descriptionField = {
    width: '100%',
    padding: '10px 0 100px 10px',
  };


  const dispatch = useDispatch(); // must be combined with an action
  const title = useSelector(state => state.listingReducer.title);
  const description = useSelector(state => state.listingReducer.description);
  const status = useSelector(state => state.listingReducer.status);
  const location = useSelector(state => state.listingReducer.location);
  const price = useSelector(state => state.listingReducer.price);
  const author = useSelector(state => state.userReducer.userId);
  //const seeCreateListing = useSelector(state => state.userReducer.seeCreateListing);
  const listingId = useSelector(state => state.listingReducer.listingId);

  function updateListing() {
    console.log(`Update listing with \nListin title : ${title} \nlocation : ${location} \nprice : ${price}`);

    let data = qs.stringify({
      title: title,
      description: description,
      status: status,
      location: location,
      price: price,
      author: author,
      listingId: listingId,
    });

    let config = {
      method: 'post',
      url: '/listing/update',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        // dispatch(setIsLoggedIn(true));
        // redirect
        //window.location.href = '/';
        dispatch(setSeeEditListing(false));
      })
      .catch(function (error) {
        console.log(error);
      });
    // send the request
  }

  return (
    <div className="new-listing-container">
      <div className="new-listing-header">
        <h1 className="new-listing-title">Update listing!</h1>
        {/* <div className='closeButton' onClick={() => {dispatch(setSeeEditListing(false)); }}>
          <CancelIcon />
        </div> */}
      </div>

      <div className="new-listing-body">
        <div className="new-listing-image">
          <img src={defaultImage} width="150px" alt='defaultImage' />
        </div>
        <div style={{ paddingTop: '30px' }}>
          {/* <button className='button'>Add a picture</button> */}
        </div>
        <div style={verticalHr}></div>
        <div className="new-listing-form">
          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Title:</h2>
            <input style={inputField} type='text' name='title' value={title} onChange={e => dispatch(setTitle(e.target.value))} />
          </div>

          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Description:</h2>
            <input id='descriptionField' style={descriptionField} type='text' name='description' value={description} onChange={e => dispatch(setDescription(e.target.value))} />
          </div>

          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Status:</h2>
            <input style={inputField} type='text' name='status' value={status} onChange={e => dispatch(setStatus(e.target.value))} />
          </div>

          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Location:</h2>
            <input style={inputField} type='text' name='location' value={location} onChange={e => dispatch(setLocation(e.target.value))} />
          </div>

          <div style={fieldContainer}>
            <h2 style={fieldTitle}>Price: $</h2>
            <input style={inputField} type='text' name='price' value={price} onChange={e => dispatch(setPrice(e.target.value))} />
          </div>
        </div>
      </div>
      <div className="new-listing-footer" >
        <div style={{ float: 'right' }}>
          <button className='button' onClick={() => { updateListing(); }}>Update listing</button>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
