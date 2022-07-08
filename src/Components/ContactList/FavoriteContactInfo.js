import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import colors from '../../Constants/colors';

const FavoriteContactInfo = ({ name, surname }) => {
  let text = '';
  for (let i = 0, j = 0; i < 9; i++) {
    text += name.charAt(i);
    if (name.length === i && surname.length === 0) {
      break;
    } else if (name.length < i) {
      text += surname.charAt(j);
      j++;
    } else if (name.length === i) {
      text += ' ';
    }
  }

  return (
    <View style={styles.contactInfoContainer}>
      <Text style={styles.contactNameAndSurnameText}>
        {`${text.concat('...')}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contactInfoContainer: {
    width: 79,
    height: 24,
    marginLeft: 10,
    borderBottomColor: colors.grey,
    marginBottom: 25,
    alignItems: 'center',
  },
  contactNameAndSurnameText: {
    fontSize: 14,
    paddingBottom: 3,
    color: colors.black,
    fontWeight: '600',
    marginTop: 8.78,
  },
});

export default FavoriteContactInfo;
