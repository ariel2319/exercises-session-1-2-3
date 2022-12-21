import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { contactData } from '../models/contact.class';


const RenderContact = ({ contact }) => {
  const stateContact = contact.conected

  const [conected, isConected] = useState(stateContact);

  const changeState = () => {
    isConected(!conected)
  }


  return (
    <div>
      <h1 style={{textAlign: 'left'}}> CONTACT </h1>

      <h2 style={{textAlign: 'left'}}> Details: </h2>

      <h4 style={{textAlign: 'left'}}>
        Full Name: {contact?.name} {contact.lastName}
      </h4>

      <h4 style={{textAlign: 'left'}}>
        Email: {contact?.email}
      </h4>

      <h3 style={{textAlign: 'left'}}>
        Contact <b> {conected ? 'On Line' : 'Not Available'} </b>
      </h3>

<button onClick={changeState}> {conected !== true ? 'Connected' : 'Disconnect'} </button>

      
    </div>
  );
};


RenderContact.propTypes = {
  contact: PropTypes.instanceOf(contactData),
};


export default RenderContact;
