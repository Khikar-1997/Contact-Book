import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import List from '../Components/ContactList/List';
import FavoritesList from '../Components/ContactList/FavoritesList';
import SearchButton from '../Components/ContactList/SearchButton';
import Avatar from '../UIKit/Avatar';

import colors from '../Constants/colors';
import * as Routes from '../Constants/navigationRouts';
import imagePaths from '../Constants/imagePaths';
import contacts from '../../data/MOCK_DATA.json';
import Button from '../UIKit/Button';

const Contacts = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate(Routes.ADD_CONTACTS)}
          icon="add"
          size="small"
        />
      ),
    });
  });

  return (
    <View style={styles.contactScreen}>
      <SearchButton contacts={contacts} navigation={navigation} />
      <FavoritesList data={contacts} />
      <List data={contacts} />
    </View>
  );
};

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
  },
  searchButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});

Contacts.options = {
  headerLeft: () => (
    <Avatar
      name="Khikar"
      surname="Harutyunyan"
      image={imagePaths.homePageAvatarImage}
      size="small"
    />
  ),
};

export default Contacts;
