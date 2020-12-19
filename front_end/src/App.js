import React from 'react';
import axios from 'axios';
// import { Switch, Redirect, useLocation, Link } from 'react-router-dom';
// import PrivateRoute from './pages/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn, setUserId, setSeeSignIn, setSeeSignUp, setSeeCreateListing } from './redux/actions/userActions';
import { setSeeViewListing } from './redux/actions/listingActions';


import Home from './pages/Home';
import Listing from './pages/Listing';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Manage from './pages/Manage';
import ViewListing from './pages/ViewListing';
import './assets/listing.css';

const App = () => {

  const dispatch = useDispatch();
  // const { pathname } = useLocation(); 
  const seeSignIn = useSelector(state => state.userReducer.seeSignIn);
  const seeSignUp = useSelector(state => state.userReducer.seeSignUp);
  const seeManage = useSelector(state => state.userReducer.seeManage);
  const seeViewListing = useSelector(state => state.listingReducer.seeViewListing);
  const title = {
    cursor: 'pointer'
  };
  const listingsContainer = {
    // width: '1150px',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
  };
  // const center = {
  //   margin: 'auto',
  // };
  const pageContainer = {
    // background: '#fef3da',
    background: 'rgba(255, 255, 255, 0.4)',
    margin: '0 0 140px 0',
    padding: '60px 60px',
    borderRadius: '40px',
  };
  // const verticalHr = {
  //   width: '1px',
  //   background: '#707070',
  //   margin: '0 10px',
  // };
  // const fieldContainer = {
  //   display: 'flex',
  //   margin: '20px 0'
  // };
  // const fieldTitle = {
  //   width: '170px'
  // };
  // const msgBox = {
  //   width: '500px',
  // };
  function getSessionState() {
    let config = {
      method: 'get',
      url: '/getSessionState',
    };

    axios(config)
      .then(function (response) {
        if (response.data.username) {
          dispatch(setIsLoggedIn(true));
          dispatch(setUserId(response.data._id));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getSessionState();
  });

  const bg = {
    background: '#FDEAC3',
  };

  return (
    <div classNameName='App' style={bg}>
      <div className='title'>
        <h2 style={title} onClick={() => { dispatch(setSeeSignUp(false)); dispatch(setSeeSignIn(false)); dispatch(setSeeCreateListing(false)); }}>reactorsHub</h2>
      </div>

      {/* only show if signup or signin is hidden */}
      <div>
        {!seeSignUp && !seeSignIn && (
          <div>
            <Home />
          </div>
        )}
      </div>

      {/* only show if sign up button is pressed */}
      <div>
        {seeSignUp && !seeSignIn && (
          <div>
            <SignUp />
          </div>
        )}
      </div>

      {/* only show if sign up button is pressed */}
      <div>
        {seeSignIn && !seeSignUp && (
          <div>
            <SignIn />
          </div>
        )}
      </div>
      {/* only show if sign up button is pressed */}
      <div>
        {seeManage && (
          <div>
            <Manage />
          </div>
        )}
      </div>



      <div>
        <div className='title'>
          <h2>Listings</h2>
        </div>
        {/* only show if listing is pressed */}
        <div >
          {seeViewListing && (
            <div style={pageContainer} id="myModal" className="modal">
              <div style={{ background: '#FDEAC3', borderRadius: '40px',}} className="modal-content">
                <span className="close" onClick={() => {dispatch(setSeeViewListing(false));}}>&times;</span>
                <ViewListing />
              </div>
            </div>
          )}
        </div>
        <div style={listingsContainer}>


          {/* <div> */}
          <Listing />
          {/* </div> */}



        </div>
      </div>


    </div>
  );
};

export default App;
