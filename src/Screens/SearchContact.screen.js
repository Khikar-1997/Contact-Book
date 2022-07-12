import React from 'react';
import { View } from 'react-native';

import IconButton from '../Components/Buttons/IconButton';
import imagePaths from '../Constants/imagePaths';
import ContactSearch from '../Components/ContactSearch/ContactSearch';

import * as Routes from '../Constants/navigationRouts';

const SearchContact = () => <View />;

SearchContact.options = {
  headerLeft: () => (
    <IconButton page={Routes.CONTACTS} image={imagePaths.arrowIcon} />
  ),
  headerTitle: () => <ContactSearch />,
};

export default SearchContact;
