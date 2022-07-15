import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../../Constants/colors';

const Avatar = ({ image, name, surname, size = 'small' }) => (
  <View style={[styles.imageContainer, styles[`size_${size}`]]}>
    {image ? (
      <Image
        source={
          typeof image !== 'number'
            ? {
                uri: image,
              }
            : image
        }
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
    backgroundColor: colors.blackPearl,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarNameFirstLetter: {
    color: colors.white,
  },
  size_medium: {
    width: 53,
    height: 53,
    borderRadius: 16,
  },
  size_large: {
    width: 104,
    height: 104,
    borderRadius: 24,
  },
  size_small: {
    width: 40,
    height: 40,
    borderRadius: 16,
  },
});

export default Avatar;
