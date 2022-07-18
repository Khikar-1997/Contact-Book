import React from 'react';

import ContactRow from './ContactRow';
import FavoriteContact from './FavoriteContact';

const Contact = ({ contact, isFavorite }) =>
  !isFavorite ? (
    <ContactRow contact={contact} />
  ) : (
    <FavoriteContact contact={contact} />
  );

export default Contact;
