import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Button } from 'react-native';

import { ADD_CONTACTS } from '../Constants/navigationRouts';

import ContactsList from '../Components/ContactList/ContactsList';
import FavoritesList from '../Components/FavoritesContactList/FavoritesList';

const Contacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactScreen}>
      <Button title="Add" onPress={() => navigation.navigate(ADD_CONTACTS)} />
      <FavoritesList />
      <ContactsList />
    </View>
  );
};

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
  },
});

export default Contacts;
