import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import IconButton from '../Components/Buttons/IconButton';
import SearchedContacts from '../Components/ContactSearch/SearchedContacts';

import * as Routes from '../Constants/navigationRouts';
import colors from '../Constants/colors';
import imagePaths from '../Constants/imagePaths';

const SearchContact = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [searchedText, setSearchedText] = useState('');
  const MOCK_DATA = route.params.contacts;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => setSearchedText(event.nativeEvent.text),
        placeholder: 'Search',
        textColor: colors.logan,
        hideWhenScrolling: false,
      },
    });
  }, [navigation]);

  return (
    <View style={styles.searchedContactsContainer}>
      <SearchedContacts value={searchedText} contacts={MOCK_DATA} />
    </View>
  );
};

SearchContact.options = {
  headerSearchBarOptions: {
    // onChangeText: event => setSearchedText(event.nativeEvent.text),
    placeholder: 'Search',
    textColor: colors.logan,
    hideWhenScrolling: false,
  },
  headerLeft: () => (
    <IconButton page={Routes.CONTACTS} image={imagePaths.arrowIcon} />
  ),
};

const styles = StyleSheet.create({
  searchedContactsContainer: {
    flex: 1,
  },
});

export default SearchContact;
