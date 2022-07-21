import { createAction } from '@reduxjs/toolkit';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const id = uuidv4();

export const addContact = createAction('CONTACT/ADD_CONTACT', contactInfo => {
  return {
    payload: {
      id: id,
      ...contactInfo,
      favorites: false,
    },
  };
});
