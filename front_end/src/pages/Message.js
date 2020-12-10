import React from 'react';

const Message = () => {
  const center = {
    width: '1300px',
    margin: 'auto',
  };
  const pageContainer = {
    background: 'rgba(255, 255, 255, 0.4)',
    margin: '0 0 140px 0',
    padding: '50px',
    borderRadius: '40px',
  };
  const msgBubble = {
    background:'white',
    padding:'8px 20px',
    borderRadius:'20px',
    width:'max-content',
    margin:'30px 0 0 0'
  };
  const replyBubble = {
    background:'white',
    padding:'8px 20px',
    borderRadius:'20px',
    width:'max-content',
    margin:'30px 0 0 auto',
    marginLeft:'auto',
  };
  const msgText = {
    fontWeight:'400',
  };
  const msgBox = {
    width:'100%',
    borderRadius:'20px 0 0 20px',
    padding:'16px',
  };

  return (
    <div>

      <div style={center}>
        <div style={pageContainer}>
          <div style={{textAlign:'center', margin:'0 0 60px 0'}}>
            <h2>Rick Harrison</h2>
          </div>

          <div style={msgBubble}>
            <h3 style={msgText}>The best I can do is 30k and an old painting</h3>
          </div>

          <div style={replyBubble}>
            <h3 style={msgText}>How about 50k and an old painting</h3>
          </div>

          <div style={msgBubble}>
            <h3 style={msgText}>Deal!</h3>
          </div>
          
          <div>
            <div style={{display:'flex', padding:'50px 0 0 0', position:'sticky', bottom:'0'}}>
              <input style={msgBox} type='text' name='inquiry' placeholder={'Write your message...'} />
              <button className='yellow-btn' style={{borderRadius:'0 20px 20px 0'}}>Send</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Message;