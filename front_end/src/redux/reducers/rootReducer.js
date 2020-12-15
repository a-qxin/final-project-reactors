import { combineReducers } from 'redux';

import userReducer from './userReducer';
import inquiryReducer from './inquiryReducer';

export default combineReducers({
  userReducer,
  inquiryReducer,
  // todo, add more reducers
});
