import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Contact from '../ContactList/Contact';

import filterContactByInputtedValue from '../../Utils/filterContactByValue';

const SearchedContacts = ({ value, contacts }) => {
  const searchedContactsList = filterContactByInputtedValue(value, contacts);

  const dataToShow =
    value === '' ? contacts.slice(0, 10) : searchedContactsList;

  return (
    <FlatList
      data={dataToShow}
      renderItem={({ item }) => <Contact contact={item} />}
      keyExtractor={item => item.id}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.searchedContactsList}
    />
  );
};

const styles = StyleSheet.create({
  searchedContactsList: {
    paddingTop: 10,
  },
});

export default SearchedContacts;
