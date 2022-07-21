import contacts from '../../data/MOCK_DATA.json';
import { ADD_CONTACT } from '../Actions/contacts';

const initialState = {
  value: contacts,
};

export default (state = initialState, action) => {
  if (action.type === ADD_CONTACT) {
    return { ...state, value: [...state.value, action.payload] };
  }
  return state;
};
