const initState = () => ({
  message: 'HELLO!',
});

const inquiryReducer = (state = initState(), action) =>{
  console.log(action);
  switch(action.type){
    case 'MAKE_INQUIRY':
      return{
        ...state, 
        message: action.message, 
      };
    default:
      return state;
  };

}; 

export default inquiryReducer;