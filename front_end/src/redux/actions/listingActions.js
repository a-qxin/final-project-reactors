export const setTitle = (title) => ({
  type: 'SET_TITLE',
  title,
});

export const setDescription = (description) => ({
  type: 'SET_DESCRIPTION',
  description,
});

export const setStatus = (status) => ({
  type: 'SET_STATUS',
  status,
});

export const setLocation = (location) => ({
  type: 'SET_LOCATION',
  location,
});

export const setPrice = (price) => ({
  type: 'SET_PRICE',
  price,
});

export const setAuthor = (author) => ({
  type: 'SET_AUTHOR',
  author,
});

export const setListingId = (listingId) => ({
  type: 'SET_LISTING_ID',
  listingId,
});

export const setSeeViewListing = (seeViewListing) => ({
  type: 'SET_SEE_VIEW_LISTING',
  seeViewListing,
});


export const setSeeEditListing = (seeEditListing) => ({
  type: 'SET_SEE_EDIT_LISTING',
  seeEditListing,
});

export const setIsUserOwner = (isUserOwner) => ({
  type: 'SET_IS_USER_OWNER',
  isUserOwner,
});
