import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../../Constants/colors';

const FavoriteContactInfo = ({
  name,
  surname,
}: {
  name: string;
  surname: string;
}) => (
  <View style={styles.contactInfoContainer}>
    <Text style={styles.contactNameAndSurnameText} numberOfLines={1}>
      {`${name} ${surname || ''}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  contactInfoContainer: {
    marginLeft: 10,
    borderBottomColor: colors.quartz,
    alignItems: 'center',
  },
  contactNameAndSurnameText: {
    fontSize: 14,
    paddingBottom: 3,
    color: colors.black,
    fontWeight: '600',
    marginTop: 9,
  },
});

export default FavoriteContactInfo;
