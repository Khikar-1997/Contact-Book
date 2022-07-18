import React from 'react';
import { View } from 'react-native';

import Button from '../UIKit/Button';

import * as Routes from '../Constants/navigationRouts';

const AddContactScreen = () => <View />;

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
