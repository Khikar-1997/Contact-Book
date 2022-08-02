import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageURISource,
  GestureResponderEvent,
} from 'react-native';

export const ImageUploadForm = ({
  pickPicture,
  uri,
  source,
}: {
  pickPicture: (event: GestureResponderEvent) => void;
  uri: string;
  source: ImageURISource;
}) => (
  <TouchableOpacity onPress={pickPicture}>
    <Image style={styles.avatar} source={uri ? { uri } : source} />
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
