import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Contact from '../ContactList/Contact';

const SearchedContacts = ({ contacts }) => (
  <FlatList
    data={contacts}
    renderItem={({ item }) => <Contact contact={item} />}
    keyExtractor={item => item.id}
    contentInsetAdjustmentBehavior="automatic"
    style={styles.searchedContactsList}
  />
);

const styles = StyleSheet.create({
  searchedContactsList: {
    paddingTop: 10,
  },
});

export default SearchedContacts;
