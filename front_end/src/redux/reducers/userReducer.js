const initState = () => ({
  userName: 'johnDoe',
  userId: '-1',
  isLoggedIn: false,
  email: 'johndoe@example.com',
  password: 'abc123456789',
  confirmPassword: 'abc123456789',
  seeCreateListing: false,
  seeSignUp: false,
  seeSignIn: false,
  seeManage: false,
});

// keep track of the current app state
// modify the state given a request (action) [its an object]
const userReducer = (state = initState(), action) => {
  // all actions have a type
  switch(action.type){
    case 'USER_NAME_SET':
      return {
        ...state, // copy old state
        userName: action.userName, // input the new user name
      };
    case 'USER_ID_SET':
      return {
        ...state, // copy old state
        userId: action.userId, // input the new user name
      };
    case 'USER_SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'USER_EMAIL_SET':
      return {
        ...state,
        email: action.email,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    case 'SET_CONFIRM_PASSWORD':
      return {
        ...state,
        confirmPassword: action.confirmPassword,
      };
    case 'SET_SEE_CREATE_LISTING':
      return {
        ...state,
        seeCreateListing: action.seeCreateListing,
      };
    case 'SET_SEE_SIGNUP':
      return {
        ...state, // copy old state
        seeSignUp: action.seeSignUp, // input the new title
      };
    case 'SET_SEE_SIGNIN':
      return {
        ...state, // copy old state
        seeSignIn: action.seeSignIn, // input the new title
      };
    case 'SET_SEE_MANAGE':
      return {
        ...state, // copy old state
        seeManage: action.seeManage, // input the new title
      };
    default:
      // we don't want to modify state, ignore action
      return state;
  }
};

export default userReducer;