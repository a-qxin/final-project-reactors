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
