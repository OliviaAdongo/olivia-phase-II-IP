import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (

  <div className="textContainer">
    <div>
      <h1>Chatterly</h1>

    </div>
    { 
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
    <button className='contacts'>Contacts</button>
  </div>
);

export default TextContainer;