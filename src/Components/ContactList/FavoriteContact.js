import React from 'react';
import Avatar from '../../UIKit/Avatar';
import { StyleSheet, View } from 'react-native';
import FavoriteContactInfo from './FavoriteContactInfo';

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
    paddingBottom: 26,
    paddingLeft: 16,
  },
});

export default FavoriteContact;
