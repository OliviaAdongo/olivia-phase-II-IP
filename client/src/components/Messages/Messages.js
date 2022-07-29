import React from 'react';

import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

const Messages = ({ messages, name }) => (
  <div>
  <ScrollToBottom  className='messages'>
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottom>
    </div>
   
);

export default Messages;