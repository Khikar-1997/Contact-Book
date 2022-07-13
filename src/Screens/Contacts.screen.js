import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import List from '../Components/ContactList/List';
import FavoritesList from '../Components/ContactList/FavoritesList';
import SearchButton from '../Components/Buttons/SearchButton';
import Avatar from '../UIKit/Avatar';
import IconButton from '../Components/Buttons/IconButton';

import colors from '../Constants/colors';
import * as Routes from '../Constants/navigationRouts';
import imagePaths from '../Constants/imagePaths';
import contacts from '../../data/MOCK_DATA.json';

const Contacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactScreen}>
      <SearchButton navigation={navigation} contacts={contacts} />
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
});

Contacts.options = {
  headerRight: () => (
    <IconButton page={Routes.ADD_CONTACTS} image={imagePaths.addIcon} />
  ),
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
