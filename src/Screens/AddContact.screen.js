import React from 'react';
import { View } from 'react-native';

import IconButton from '../Components/Buttons/IconButton';

import imagePaths from '../Constants/imagePaths';
import * as Routes from '../Constants/navigationRouts';

const AddContactScreen = () => <View />;

AddContactScreen.options = {
  headerLeft: () => (
    <IconButton page={Routes.CONTACTS} image={imagePaths.arrowIcon} />
  ),
};

export default AddContactScreen;
