import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icons from '../Icons';
import buttonSize from './size';
import buttonColor from './variant';

const Button = ({ onPress, icon, title = '', size, variant = '' }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[buttonSize[size], buttonColor[variant]]}>
    <Icons icon={icon} />
    {!!title && <Text>{title}</Text>}
  </TouchableOpacity>
);

export default Button;
