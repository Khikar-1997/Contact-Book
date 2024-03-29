import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Contact from '../ContactList/Contact';
import { Contact as ContactType } from '../../Types/Contact';

const SearchedContacts = ({ contacts }: { contacts: ContactType[] }) => (
  <View style={styles.container}>
    <FlatList
      data={contacts}
      renderItem={({ item }) => <Contact contact={item} />}
      keyExtractor={item => item.id}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.searchedContactsList}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchedContactsList: {
    paddingTop: 10,
    flex: 1,
  },
});

export default SearchedContacts;
