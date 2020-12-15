import React from 'react';
import { useSelector, /*useDispatch*/ } from 'react-redux';
//import { makeInquiry } from '../redux/actions/inquiryActions';
import webSocket from '../webSocket';
import axios from 'axios';
let qs = require('qs');


const Message = () => {
  const center = {
    margin: 'auto',
  };
  const pageContainer = {
    background: 'rgba(255, 255, 255, 0.4)',
    margin: '0 0 140px 0',
    padding: '50px',
    borderRadius: '40px',
  };
  const msgBubble = {
    background: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    width: 'max-content',
    margin: '30px 0 0 0'
  };
  const replyBubble = {
    background: 'white',
    padding: '8px 20px',
    borderRadius: '20px',
    width: 'max-content',
    margin: '30px 0 0 auto',
    marginLeft: 'auto',
  };
  const msgText = {
    fontWeight: '400',
  };
  const msgBox = {
    width: '100%',
    borderRadius: '20px 0 0 20px',
    padding: '16px',
  };
  //const dispatch = useDispatch(); // must be combined with an action

  const userName = useSelector(state => state.userReducer.userName);
  const userId = useSelector(state => state.userReducer.userId);
  
  const author = useSelector(state => state.listingReducer.author);
  const listingId = useSelector(state => state.listingReducer.listingId);

  const [chatMessages, setChatMessages] = React.useState([]);
  const [inputMessage, setInputMessage] = React.useState('');
  
  function sendMessage() {
    // front-end validation stuff
    console.log('this is passed in ' +  JSON.stringify(location.state));
    let data = qs.stringify({
      'userName': userName,
      'userId': userId,
      'author': author,
      'listingId': listingId,
      'message': inputMessage,
    });

    let config = {
      method: 'post',
      url: '/create-inquiry',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    setInputMessage('');

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.status);

        //dispatch(makeInquiry);
      })
      .catch(function (error) {
        console.log(error);
      });
    // send the request
  }

  function syncMessages() {
    let config = {
      method: 'get',
      url: `/inquiry?listingId=${listingId}`,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setChatMessages(response.data);
        console.log(chatMessages);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleWebSocketMessage = (rawData) => {
    const data = JSON.parse(rawData.data);
    console.log(data);
    // switch (data.actionType) {
    //   case 'updateChatMessages':
    //     setChatMessages(data.chatMessages);
    //     break;
    //   default: break;
    // }
    syncMessages();
  };

  React.useEffect(() => {
    syncMessages();
    webSocket.onmessage = (m) => handleWebSocketMessage(m);
  }, []);


  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>
          <div style={{ textAlign: 'center', margin: '0 0 60px 0' }}>
            <h2>Rick Harrison</h2>
          </div>

          <div>
            {chatMessages.map((chatMessage, i) => (
              <div  style= {userName === chatMessage.userName ? replyBubble : msgBubble } key={i}>
                <h3 style={msgText}>
                  {chatMessage.message}
                </h3>
              </div>
            ))}

          </div>
          <div>
            <div style={{ display: 'flex', padding: '50px 0 0 0', position: 'sticky', bottom: '0' }}>
              <input type='text' name='inquiry' style={msgBox} value={inputMessage} placeholder={'Write your message...'} onChange={e => setInputMessage(e.target.value)} />
              <button className='yellow-btn' style={{ borderRadius: '0 20px 20px 0' }} onClick={sendMessage}>Send</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Message;