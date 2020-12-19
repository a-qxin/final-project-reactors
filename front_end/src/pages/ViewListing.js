import React from 'react';
//import { useHistory } from 'react-router-dom';

import defaultImage from '../assets/defaultimage.svg';

import { useDispatch, useSelector } from 'react-redux';
import { setSeeManage } from '../redux/actions/userActions';
import { setSeeViewListing } from '../redux/actions/listingActions';
import axios from 'axios';
let qs = require('qs');

const ViewListing = () => {

  // const urlParams = new URLSearchParams(window.location.search);

  const center = {
    margin: 'auto',
  };
  const pageContainer = {
    // background: '#fef3da',
    background: 'rgba(255, 255, 255, 0.4)',
    padding: '60px 60px',
    borderRadius: '40px',
  };
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
    width: '170px'
  };
  const msgBox = {
    width: '500px',
  };

  /* React begins here */
  // const dispatch = useDispatch();
  // let history = useHistory();

  //const inputMessage = useSelector(state => state.inquiryReducer.message);
  const [inputMessage, setInputMessage] = React.useState('');
  const dispatch = useDispatch();
  // listing data
  const title = useSelector(state => state.listingReducer.title);
  const description = useSelector(state => state.listingReducer.description);
  const status = useSelector(state => state.listingReducer.status);
  const location = useSelector(state => state.listingReducer.location);
  const price = useSelector(state => state.listingReducer.price);
  const userName = useSelector(state => state.userReducer.userName);
  const userId = useSelector(state => state.userReducer.userId);
  const author = useSelector(state => state.listingReducer.author);
  const listingId = useSelector(state => state.listingReducer.listingId);

  function sendInquiry() {
    // front-end validation stuff
    console.log('this is passed in ' + JSON.stringify(location.state));
    let data = qs.stringify({
      'userName': userName,
      'userId': userId,
      'title': title,
      'author': author,
      'listingId': listingId,
      'message': inputMessage,
    });

    let config = {
      method: 'post',
      url: '/create-inquiry',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    setInputMessage('');

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        history.push('/manage');
        //dispatch(makeInquiry);
      })
      .catch(function (error) {
        console.log(error);
      });
    // send the request
  }

  // function getListing() {
  //   const listingId = urlParams.get('listingId');
  //   console.log(`The listing id is : ${listingId}`);

  //   let data = qs.stringify({
  //     'listingId': listingId
  //   });

  //   let config = {
  //     // should this be a get instead of post?
  //     method: 'post',
  //     url: '/listing/getById',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     data: data
  //   };

  //   Axios(config)
  //     .then(function (response) {
  //       console.log(response);
  //       console.log(response.status);
  //       // set listing with data retrieved
  //       response.body.title = title;
  //       response.body.description = this.description;
  //       response.body.status = this.status;
  //       response.body.location = this.location;
  //       response.body.price = this.price; 
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // React.useEffect(() => {
  //   getListing();
  // }, []);

  /* React ends here */

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>

          <div><h1>{title}</h1></div>

          <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', }}>
            <div style={{ margin: 'auto', textAlign: 'center' }}>
              <div>
                <img src={defaultImage} width="150px" alt='defaultImage' />
              </div>
              <div style={{ paddingTop: '30px' }}>
              </div>
            </div>

            <div style={verticalHr}></div>
            <div style={{ margin: 'auto', paddingLeft: '100px' }}>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Description: </h2>
                <h2>{description}</h2>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Status:</h2>
                <h2>{status}</h2>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Location:</h2>
                <h2>{location}</h2>
              </div>

              <div style={fieldContainer}>
                <h2 style={fieldTitle}>Price:</h2>
                <h2>${price}</h2>
              </div>

              <div>
                <input style={msgBox} type='text' name='inquiry' placeholder={'Write your message...'}  onClick={ (e) => setInputMessage(e.target.value)}/>
              </div>

            </div>
          </div>

          <div style={{ paddingBottom: '30px' }}>
            <div style={{ float: 'right' }}>
              <button className='yellow-btn' onClick={() => {sendInquiry() , dispatch(setSeeManage(true)); dispatch(setSeeViewListing(false));}}>Send message to seller</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};






























































export default ViewListing;
