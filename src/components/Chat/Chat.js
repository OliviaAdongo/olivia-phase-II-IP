import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { useLocation } from "react-router";
import './Chat.css';
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

let socket;

const ENDPOINT = 'http://localhost:3001/';



const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    // console.log(name,room)
     const location = useLocation();
  
    useEffect(() => {
      
      const { name, room } = queryString.parse(location.search);
  
      socket = io(ENDPOINT);
      console.log(socket)
  
      setRoom(room);
      setName(name)
  
      socket.emit('join', { name, room }, (error) => {
        if(error) {
          alert(error);
        }
      });
    }, [ENDPOINT, location.search]);
    
    useEffect(() => {
      socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
      });
      
      socket.on("roomData", ({ users }) => {
        setUsers(users);
      }); 
  }, []);
  
  //send message event
    const sendMessage = (event) => {
      event.preventDefault();
  
      if(message) {
        socket.emit('sendMessage', message, () => setMessage(''));
      }
    }
    return (
        <div className="outerContainer">
          <div className="container">
              <InfoBar room={room} />
              <Messages messages={messages} name={name} />
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
          </div>
          <TextContainer users={users}/>
        </div>
      );
    }
    
    export default Chat;