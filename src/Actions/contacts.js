import { createAction } from '@reduxjs/toolkit';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('CONTACT/ADD_CONTACT', contactInfo => {
  return {
    payload: {
      id: uuidv4(),
      ...contactInfo,
      favorites: false,
    },
  };
});
