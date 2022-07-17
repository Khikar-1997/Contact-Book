import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../UIKit/Button';
import AddContact from '../Components/AddContacts/AddContact';

import * as Routes from '../Constants/navigationRouts';
import colors from '../Constants/colors';
import { useRoute } from '@react-navigation/native';

const AddContactScreen = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <AddContact contacts={route.params.contacts} />
    </View>
  );
};

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
