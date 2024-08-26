// components/ContactCard.js

import React from 'react';

const ContactCard = ({ contact, onClick }) => {
  return (
    <div className="contact-card" onClick={onClick}>
      <img src={`https://robohash.org/${contact.id}?set=set5`} alt={contact.name} className="contact-image" />
      <div className="contact-info">
        <h3>{contact.name}</h3>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
