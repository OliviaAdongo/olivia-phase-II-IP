import React from "react";
import './Input.css';


const Input = ({setMessage, sendMessage, message })=>{

    const handleClick= ()=>{
        
    }
    return(
    
        <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
         />
        <button className="sendButton" onClick={handleClick}>Send</button>
        </form>


    )
}
export default Input;