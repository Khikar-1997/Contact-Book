import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from '../Icons';
import colors from '../../Constants/colors';

const Button = ({ onPress, icon, title = '', size, variant = 'default' }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles[`size_${size}`], styles[`variant_${variant}`]]}>
    <Icons icon={icon} />
    {!!title && <Text>{title}</Text>}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  size_small: {
    paddingVertical: 1,
    paddingHorizontal: 1,
    borderRadius: 12,
  },
  size_large: {
    paddingVertical: 12,
    paddingLeft: 12,
    borderRadius: 16,
  },
  variant_default: {
    backgroundColor: colors.white,
  },
  variant_primary: {
    backgroundColor: colors.caribbeanGreen,
  },
  variant_secondary: {
    backgroundColor: colors.quartz,
  },
  variant_tertiary: {
    backgroundColor: colors.royalBlue,
  },
  variant_quaternary: {
    backgroundColor: colors.tomato,
  },
});

export default Button;
