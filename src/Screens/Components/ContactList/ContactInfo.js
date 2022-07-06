import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ContactInfo = ({ contactList }) => {
  return (
    <View style={styles.contactInfoContainer}>
      <Text style={styles.contactNameAndSurnameText}>
        {`${contactList.item.name} ${contactList.item.surname}`}
      </Text>
      <Text style={styles.contactPhoneText}>
        {contactList.item.phone_number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactInfoContainer: {
    borderBottomWidth: 1,
    width: '75%',
    marginLeft: 10,
    justifyContent: 'center',
    borderBottomColor: '#D9DBE9',
  },
  contactNameAndSurnameText: {
    fontSize: 16,
    paddingBottom: 3,
    color: '#4E4B66',
    fontWeight: 'bold',
  },
  contactPhoneText: {
    color: '#6E7191',
    fontSize: 12,
  },
});

export default ContactInfo;
