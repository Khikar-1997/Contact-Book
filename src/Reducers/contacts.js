import contacts from '../../data/MOCK_DATA.json';
import { addContact } from '../Actions/contacts';

const initialState = {
  contacts: contacts,
};

export default (state = initialState, action) => {
  if (action.type === addContact().type) {
    return { ...state, contacts: [...state.value, action.payload] };
  }
  return state;
};
