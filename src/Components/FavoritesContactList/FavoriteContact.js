import React from 'react';
import Avatar from '../../UIKit/Avatar';
import { StyleSheet, View } from 'react-native';
import FavoriteContactInfo from './FavoriteContactInfo';

const FavoriteContact = ({ item }) => (
  <View style={styles.contactListContainer}>
    <Avatar
      image={item.avatar_image}
      name={item.name}
      surname={item.surname}
      size="large"
      imageSize="largeImage"
    />
    <FavoriteContactInfo name={item.name} surname={item.surname} />
  </View>
);

const styles = StyleSheet.create({
  contactListContainer: {
    paddingBottom: 26,
    paddingLeft: 16,
  },
});

export default FavoriteContact;
