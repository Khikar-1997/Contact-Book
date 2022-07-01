import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { ADD_CONTACTS } from '../Constants/navigationRouts';

const Contacts = ({ navigation }) => {
  return (
    <View style={styles.contactScreen}>
      <Button title="Add" onPress={() => navigation.navigate(ADD_CONTACTS)} />
    </View>
  );
};

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
  },
});

export default Contacts;
