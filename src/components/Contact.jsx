import React from 'react';
//import PropTypes from 'prop-types';
import RenderContact from './RenderContact';
import { contactData } from '../models/contact.class'

const ContactComponent = () => {

  const defaultContact = new contactData('Ariel', 'Maldonado', 'ariel@gmail.com', false)

  return (
    <div>
      <h3>
        Exercises N°1
      </h3>
      <h3>
        Session 1 - 2 & 3 {defaultContact.name}
      </h3>

      <RenderContact
        contact={defaultContact}
      />

    </div>
  );
}


ContactComponent.propTypes = {

};


export default ContactComponent;
