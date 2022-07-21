import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../UIKit/Button';
import AddContact from '../Components/AddContacts/AddContact';

import * as Routes from '../Constants/navigationRouts';
import colors from '../Constants/colors';

const AddContactScreen = () => (
  <View style={styles.container}>
    <AddContact />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

AddContactScreen.options = ({ navigation }) => ({
  headerLeft: () => (
    <Button
      onPress={() => navigation.navigate(Routes.CONTACTS)}
      icon="arrow"
      size="small"
    />
  ),
});

export default AddContactScreen;
