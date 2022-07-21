import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Contact from '../ContactList/Contact';

const SearchedContacts = ({ contacts }) => (
  <View style={{ flex: 1 }}>
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
  searchedContactsList: {
    paddingTop: 10,
    flex: 1,
  },
});

export default SearchedContacts;
