import React, { useLayoutEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import SearchedContacts from '../Components/ContactSearch/SearchedContacts';

import * as Routes from '../Constants/navigationRouts';
import colors from '../Constants/colors';
import Button from '../UIKit/Button';

const SearchContact = () => {
  const route = useRoute();
  const timeoutRef = useRef();
  const navigation = useNavigation();

  const [searchedText, setSearchedText] = useState('');
  const MOCK_DATA = route.params.contacts;

  const handleChange = e => {
    e.persist();
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      console.log('1');
      setSearchedText(e.nativeEvent.text);
    }, 2000);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => handleChange(event),
        placeholder: 'Search',
        textColor: colors.logan,
        hideWhenScrolling: false,
      },
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate(Routes.CONTACTS)}
          icon="arrow"
          size="small"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.searchedContactsContainer}>
      <SearchedContacts value={searchedText} contacts={MOCK_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchedContactsContainer: {
    flex: 1,
  },
});

export default SearchContact;
