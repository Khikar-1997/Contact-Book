import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import SearchedContacts from '../Components/ContactSearch/SearchedContacts';

import * as Routes from '../Constants/navigationRouts';
import colors from '../Constants/colors';
import Button from '../UIKit/Button';
import filterContactByInputtedValue from '../Utils/filterContactByValue';

const SearchContact = () => {
  const route = useRoute();
  const timeoutRef = useRef();
  const navigation = useNavigation();

  const [searchedText, setSearchedText] = useState('');
  const contacts = route.params.contacts;

  const searchedContactsList = filterContactByInputtedValue(
    searchedText,
    contacts,
  );

  const initial = useMemo(() => contacts.slice(0, 10), [contacts]);
  const dataToShow = searchedText === '' ? initial : searchedContactsList;

  const handleChange = ({ nativeEvent: { text } }) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchedText(text);
    }, 250);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => handleChange(event),
        placeholder: 'Search',
        textColor: colors.logan,
        hideWhenScrolling: false,
      },
    });
  }, [navigation]);

  return <SearchedContacts value={searchedText} contacts={dataToShow} />;
};

SearchContact.options = ({ navigation }) => ({
  headerLeft: () => (
    <Button
      onPress={() => navigation.navigate(Routes.CONTACTS)}
      icon="arrow"
      size="small"
    />
  ),
});

export default SearchContact;
