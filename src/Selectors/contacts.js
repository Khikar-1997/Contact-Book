import { createSelector } from '@reduxjs/toolkit';

import contactListWithTitle from '../Utils/contactListWithTitle';
import filterFavorites from '../Utils/filterFavorites';

export const getContacts = state => state.contacts;

export const selectContactListWithTitle = createSelector(
  getContacts,
  contacts => contactListWithTitle(contacts),
);

export const selectFilterFavorites = createSelector(getContacts, contacts =>
  filterFavorites(contacts),
);
