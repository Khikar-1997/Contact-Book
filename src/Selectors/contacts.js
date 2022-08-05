import { createSelector } from '@reduxjs/toolkit';

import contactListWithTitle from '../Utils/contactListWithTitle';
import filterFavorites from '../Utils/filterFavorites';

export const selectContacts = state => state.contacts;

export const selectContactListWithTitle = createSelector(
  selectContacts,
  contacts => contactListWithTitle(contacts),
);

export const selectFilterFavorites = createSelector(selectContacts, contacts =>
  filterFavorites(contacts),
);
