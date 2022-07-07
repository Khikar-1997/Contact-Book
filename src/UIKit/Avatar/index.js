import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import avatarSize from './size';
import colors from '../../Constants/colors';

const Avatar = ({ image, name, surname, size = 'small' }) => (
  <View style={[styles.imageContainer, avatarSize[size]]}>
    {image ? (
      <Image
        source={{
          uri: image,
        }}
        style={styles.avatarImage}
      />
    ) : (
      <Text style={styles.avatarNameFirstLetter}>
        {`${name.charAt(0).concat(surname.charAt(0) || '')}`}
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: colors.black,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 40,
    height: 43,
    paddingBottom: 28,
    marginBottom: 10,
  },
  avatarNameFirstLetter: {
    color: colors.white,
  },
});

export default Avatar;
