import React from 'react';
import Avatar from '../../UIKit/Avatar';
import ContactInfo from './ContactInfo';
import { StyleSheet, View } from 'react-native';

const ContactRow = ({ contact }) => (
  <View style={styles.contactListContainer}>
    <Avatar
      image={contact.avatar_image}
      name={contact.name}
      surname={contact.surname}
      size="small"
    />
    <ContactInfo
      name={contact.name}
      surname={contact.surname}
      phoneNumber={contact.phone_number}
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

export default ContactRow;
