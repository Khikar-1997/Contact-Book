import React from 'react';

import Button from '../UIKit/Button';
import AddContact from '../Components/AddContacts';

import * as Routes from '../Constants/navigationRouts';

const AddContactScreen = () => <AddContact />;

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
