import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../UIKit/Inputs';
import Icons from '../../UIKit/Icons';

const FiledForm = props => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Icons icon={props.icon} />
        <Input {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 15,
  },
});

export default FiledForm;