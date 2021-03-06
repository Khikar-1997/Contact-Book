import React from 'react';
import { StyleSheet, View } from 'react-native';

import FavoriteContactInfo from './FavoriteContactInfo';
import Avatar from '../../UIKit/Avatar';

const FavoriteContact = ({ contact }) => (
  <View style={styles.contactListContainer}>
    <Avatar
      image={contact.avatar_image}
      name={contact.name}
      surname={contact.surname}
      size="large"
    />
    <FavoriteContactInfo name={contact.name} surname={contact.surname} />
  </View>
);

const styles = StyleSheet.create({
  contactListContainer: {
    width: 104,
    marginRight: 16,
  },
});

export default FavoriteContact;
