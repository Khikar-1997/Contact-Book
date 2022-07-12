import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

import MOCK_DATA from '../../data/MOCK_DATA.json';

import List from '../Components/ContactList/List';
import FavoritesList from '../Components/ContactList/FavoritesList';
import SearchButton from '../Components/Buttons/SearchButton';

import colors from '../Constants/colors';
import IconButton from '../Components/Buttons/IconButton';
import * as Routes from '../Constants/navigationRouts';
import imagePaths from '../Constants/imagePaths';
import Avatar from '../UIKit/Avatar';

const Contacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactScreen}>
      <SearchButton navigation={navigation} />
      <FavoritesList data={MOCK_DATA} />
      <List data={MOCK_DATA} />
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
      size="homePage"
    />
  ),
};

export default Contacts;
