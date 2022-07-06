import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../../Constants/colors';

const ContactInfo = ({ name, surname, phoneNumber }) => (
  <View style={styles.contactInfoContainer}>
    <Text style={styles.contactNameAndSurnameText}>
      {surname ? `${name} ${surname}` : `${name}`}
    </Text>
    <Text style={styles.contactPhoneText}>{phoneNumber}</Text>
  </View>
);

const styles = StyleSheet.create({
  contactInfoContainer: {
    borderBottomWidth: 1,
    width: '75%',
    marginLeft: 10,
    justifyContent: 'center',
    borderBottomColor: colors.grey,
  },
  contactNameAndSurnameText: {
    fontSize: 16,
    paddingBottom: 3,
    color: colors.cornFlowerBlue,
    fontWeight: 'bold',
  },
  contactPhoneText: {
    color: colors.stormGrey,
    fontSize: 12,
  },
});

export default ContactInfo;
