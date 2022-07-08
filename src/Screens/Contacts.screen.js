import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Button } from 'react-native';

import { ADD_CONTACTS } from '../Constants/navigationRouts';
import MOCK_DATA from '../../data/MOCK_DATA.json';

import List from '../Components/ContactList/List';
import FavoritesList from '../Components/ContactList/FavoritesList';

import colors from '../Constants/colors';

const Contacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactScreen}>
      <Button title="Add" onPress={() => navigation.navigate(ADD_CONTACTS)} />
      <FavoritesList data={MOCK_DATA} />
      <List data={MOCK_DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Contacts;
