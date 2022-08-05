import React from 'react';

import ContactRow from './ContactRow';
import FavoriteContact from './FavoriteContact';
import { Contact as ContactType } from '../../Types/Contact';

const Contact = ({
  contact,
  isFavorite,
}: {
  contact: ContactType;
  isFavorite?: boolean;
}) =>
  !isFavorite ? (
    <ContactRow contact={contact} />
  ) : (
    <FavoriteContact contact={contact} />
  );

export default Contact;
