import React from 'react';
import { View } from 'react-native';
import IconButton from '../Components/Buttons/IconButton';
import * as Routes from '../Constants/navigationRouts';
import imagePaths from '../Constants/imagePaths';

const SearchContact = () => {
  return <View />;
};

SearchContact.options = {
  headerLeft: () => (
    <IconButton page={Routes.CONTACTS} image={imagePaths.arrowIcon} />
  ),
};

export default SearchContact;
