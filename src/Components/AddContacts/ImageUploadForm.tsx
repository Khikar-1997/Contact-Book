import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import imagePaths from '../../Constants/imagePaths';

export const ImageUploadForm = ({
  pickPicture,
  uri,
}: {
  pickPicture: () => void;
  uri: string;
}) => (
  <TouchableOpacity onPress={pickPicture}>
    <Image
      style={styles.avatar}
      source={uri ? { uri } : imagePaths.placeholderImage}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },
});
