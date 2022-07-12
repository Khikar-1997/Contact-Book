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

const Contacts = ({ route }) => {
  const navigation = useNavigation();
  const MOCK_DATA = route.params.contacts;

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
