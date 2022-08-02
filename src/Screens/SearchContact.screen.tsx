import React, {
  ReactElement,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import SearchedContacts from '../Components/ContactSearch/SearchedContacts';

import * as Routes from '../Constants/navigationRouts';
import colors from '../Constants/colors';
import Button from '../UIKit/Button';
import filterContactByInputtedValue from '../Utils/filterContactByValue';
import { selectContacts } from '../Selectors/contacts';

const SearchContact: FunctionWithOptions = () => {
  const timeoutRef = useRef();
  const navigation = useNavigation();
  const contacts = useSelector(selectContacts);
  console.log(contacts);

  const [searchedText, setSearchedText] = useState('');

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

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={45}>
      <SearchedContacts value={searchedText} contacts={dataToShow} />
    </KeyboardAvoidingView>
  );
};

type FunctionWithOptions = {
  options: (props: {
    route: any;
    navigation: any;
  }) => NativeStackNavigationOptions;
  (): ReactElement;
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
