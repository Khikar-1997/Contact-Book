import React from 'react';
import Avatar from '../../UIKit/Avatar';
import ContactInfo from './ContactInfo';
import { StyleSheet, View } from 'react-native';

const Contact = ({ item }) => (
  <View style={styles.contactListContainer}>
    <Avatar image={item.avatar_image} name={item.name} surname={item.surname} />
    <ContactInfo
      name={item.name}
      surname={item.surname}
      phoneNumber={item.phone_number}
    />
  </View>
);

const styles = StyleSheet.create({
  contactListContainer: {
    flexDirection: 'row',
    paddingBottom: 26,
    paddingLeft: 16,
  },
});

export default Contact;
