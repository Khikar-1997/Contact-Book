import contacts from '../../data/MOCK_DATA.json';
import { addContact } from '../Actions/contacts';

const initialState = {
  contacts,
};

export default (state = initialState, action) => {
  if (action.type === addContact().type) {
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  return state;
};
