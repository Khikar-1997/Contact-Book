import React from 'react';
import Avatar from '../../UIKit/Avatar';
import ContactInfo from './ContactInfo';
import { StyleSheet, View } from 'react-native';

const Contact = ({ image, name, surname, phoneNumber }) => (
  <View style={styles.contactListContainer}>
    <Avatar image={image} name={name} surname={surname} />
    <ContactInfo name={name} surname={surname} phoneNumber={phoneNumber} />
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
