import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { ADD_CONTACTS } from '../Constants/navigationRouts';
import ContactsList from './Components/ContactList/ContactsList';

const Contacts = ({ navigation }) => {
  return (
    <View style={styles.contactScreen}>
      <Button title="Add" onPress={() => navigation.navigate(ADD_CONTACTS)} />
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
