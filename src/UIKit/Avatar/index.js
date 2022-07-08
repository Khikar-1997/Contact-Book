import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import avatarSize from './size';
import colors from '../../Constants/colors';

const Avatar = ({
  image,
  name,
  surname,
  size = 'small',
  imageSize = 'smallImage',
}) => (
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
});

export default Avatar;
