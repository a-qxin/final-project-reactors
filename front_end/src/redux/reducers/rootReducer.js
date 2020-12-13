import { combineReducers } from 'redux';

import userReducer from './userReducer';
import listingReducer from './listingReducer';

export default combineReducers({
  userReducer,
  listingReducer,
  // todo, add more reducers
});
