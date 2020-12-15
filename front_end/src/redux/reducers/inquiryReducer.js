<<<<<<< HEAD
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
=======
const initState = () =>({
  inquiries: [],
});

const inquiryReducer = (state = initState(), action) => {
  switch(action.type){
    case 'INQUIRY_MADE':
        return{
            ...state,
            inquiries: [...state.inquiries, action.inquiry],
        };
    default:
        return state;
}
};


export default inquiryReducer;
>>>>>>> 67c660621a2d50911bb63bf651e2c7ceeaeb8c75
