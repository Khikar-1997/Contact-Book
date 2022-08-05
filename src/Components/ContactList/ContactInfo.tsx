import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../../Constants/colors';

const ContactInfo = ({
  name,
  surname,
  phoneNumber,
}: {
  name: string;
  surname: string;
  phoneNumber: string;
}) => (
  <View style={styles.contactInfoContainer}>
    <Text style={styles.contactNameAndSurnameText} numberOfLines={1}>
      {`${name} ${surname || ''}`}
    </Text>
    <Text style={styles.contactPhoneText} numberOfLines={1}>
      {phoneNumber}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  contactInfoContainer: {
    borderBottomWidth: 1,
    width: '75%',
    marginLeft: 10,
    justifyContent: 'center',
    borderBottomColor: colors.quartz,
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
