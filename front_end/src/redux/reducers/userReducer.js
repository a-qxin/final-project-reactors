const initState = () => ({
  userName: 'johnDoe',
  isLoggedIn: false,
  email: 'johndoe@example.com',
  password: 'abc123456789',
  confirmPassword: 'abc123456789',
});

// keep track of the current app state
// modify the state given a request (action) [its an object]
const userReducer = (state = initState(), action) => {
  // all actions have a type
  console.log(action);
  switch(action.type){
    case 'USER_NAME_SET':
      return {
        ...state, // copy old state
        userName: action.userName, // input the new user name
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
    default:
      // we don't want to modify state, ignore action
      return state;
  }
};

export default userReducer;