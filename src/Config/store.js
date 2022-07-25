import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../Reducers/contacts';

export default configureStore({
  reducer: contactsReducer,
});
