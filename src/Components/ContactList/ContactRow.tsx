import React from 'react';
import { StyleSheet, View } from 'react-native';

import Avatar from '../../UIKit/Avatar';
import ContactInfo from './ContactInfo';
import { Contact as ContactType } from '../../Types/Contact';

const ContactRow = ({ contact }: { contact: ContactType }) => (
  <View style={styles.contactListContainer}>
    <Avatar
      image={contact.avatar_image}
      name={contact.name}
      surname={contact.surname}
      size="medium"
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
