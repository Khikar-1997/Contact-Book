import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import avatarSize from './size';
import avatarImageSize from './avatarImageSize';
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
        style={[styles.avatarImage, avatarImageSize[imageSize]]}
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
  },
  avatarImage: {
    paddingBottom: 28,
    marginBottom: 10,
  },
  avatarNameFirstLetter: {
    color: colors.white,
  },
});

export default Avatar;
