import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = ({ contactList }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: contactList.item.avatar_image,
        }}
        style={styles.avatarImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#1B2124',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 53,
    height: 53,
  },
  avatarImage: {
    width: 40,
    height: 43,
    paddingBottom: 28,
  },
});

export default Avatar;
