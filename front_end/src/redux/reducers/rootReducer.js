import { combineReducers } from 'redux';

import userReducer from './userReducer';
import listingReducer from './listingReducer';
import inquiryReducer from './inquiryReducer';

export default combineReducers({
  userReducer,
  listingReducer, 
  inquiryReducer,
  // todo, add more reducers
});
