import React, { useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Contact from '../ContactList/Contact';

import filterContactByInputtedValue from '../../Utils/filterContactByInputtedValue';

const SearchedContacts = ({ value, contacts }) => {
  const renderItem = ({ item }) => {
    return <Contact contact={item} />;
  };

  const searchedContactsList = filterContactByInputtedValue(value, contacts);

  const dataToShow = useMemo(() => {
    return value === '' ? contacts.slice(0, 10) : searchedContactsList;
  }, [contacts, searchedContactsList, value]);

  return (
    <FlatList
      data={dataToShow}
      renderItem={renderItem}
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
