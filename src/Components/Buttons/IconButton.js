import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IconButton = ({ page, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(page)}>
      <Image source={image} />
    </TouchableOpacity>
  );
};

export default IconButton;
