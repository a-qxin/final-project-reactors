const initState = () => ({
  title: 'Bob\'s backyard reactor',
  description: ' the most awesome thing in the whole world :)',
  status: 'Available',
  location: 'Stalingrad, Russia',
  price: '69,420',
  author: 'sam',
  listingId: '123'
});

// keep track of the current app state
// modify the state given a request (action) [its an object]
const listingReducer = (state = initState(), action) => {
  // all actions have a type
  console.log(action);
  switch(action.type){
    case 'SET_TITLE':
      return {
        ...state, // copy old state
        title: action.title, // input the new title
      };
    case 'SET_DESCRIPTION':
      return {
        ...state, // copy old state
        description: action.description, // input the new year
      };
    case 'SET_STATUS':
      return {
        ...state, // copy old state
        status: action.status, // input the new status
      };
    case 'SET_LOCATION':
      return {
        ...state, // copy old state
        location: action.location, // input the new location
      };
    case 'SET_PRICE':
      return {
        ...state, // copy old state
        price: action.price, // input the new price
      };
    case 'SET_AUTHOR':
      return {
        ...state, // copy old state
        author: action.author, // input the new author
      };
    case 'SET_LISTING_ID':
      return {
        ...state, // copy old state
        listingId: action.listingId, // input the new listing id
      };

    case 'USER_SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    default:
      // we don't want to modify state, ignore action
      return state;
  }
};

export default listingReducer;