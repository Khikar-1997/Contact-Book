import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AddContact = () => {
  return (
    <View style={styles.addContactScreen}>
      <Text>Contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addContactScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddContact;
