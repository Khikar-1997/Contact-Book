import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => <TextInput style={styles.textInput} {...props} />;

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 10,
    width: '100%',
  },
});
export default Input;
