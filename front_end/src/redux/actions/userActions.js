export const setUserName = (userName) => ({
  type: 'USER_NAME_SET',
  userName,
});

export const setUserId = (userId) => ({
  type: 'USER_ID_SET',
  userId,
});

export const setEmail = (email) => ({
  type: 'USER_EMAIL_SET',
  email,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: 'USER_SET_LOGGED_IN',
  isLoggedIn,
});


export const setPassword = (password) => ({
  type: 'SET_PASSWORD',
  password,
});

export const setConfirmPassword = (confirmPassword) => ({
  type: 'SET_CONFIRM_PASSWORD',
  confirmPassword,
});

export const setSeeCreateListing = (seeCreateListing) => ({
  type: 'SET_SEE_CREATE_LISTING',
  seeCreateListing,
});

export const setSeeSignUp = (seeSignUp) => ({
  type: 'SET_SEE_SIGNUP',
  seeSignUp,
});

export const setSeeSignIn = (seeSignIn) => ({
  type: 'SET_SEE_SIGNIN',
  seeSignIn,
});


export const setSeeManage = (seeManage) => ({
  type: 'SET_SEE_MANAGE',
  seeManage,
});
