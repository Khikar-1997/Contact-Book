import React from 'react';
import { View } from 'react-native';

import Button from '../UIKit/Button';

import * as Routes from '../Constants/navigationRouts';
import { useNavigation } from '@react-navigation/native';

const AddContactScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate(Routes.CONTACTS)}
          icon="arrow"
          size="small"
        />
      ),
    });
  });

  return <View />;
};

export default AddContactScreen;
