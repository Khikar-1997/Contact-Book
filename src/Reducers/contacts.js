import { createSlice } from '@reduxjs/toolkit';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import contacts from '../../data/MOCK_DATA.json';

const initialState = {
  contacts,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: contactInfo => {
        return {
          payload: {
            id: uuidv4(),
            ...contactInfo,
            favorites: false,
          },
        };
      },
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
