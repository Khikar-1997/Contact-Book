import { createStore } from '@reduxjs/toolkit';
import contactsReducer from '../Reducers/contacts';

export default createStore(contactsReducer);
