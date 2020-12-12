export const setUserName = (userName) => ({
  type: 'USER_NAME_SET',
  userName,
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
