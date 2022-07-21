import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import FiledForm from './FiledForm';

import colors from '../../Constants/colors';
import { CONTACTS } from '../../Constants/navigationRouts';
import { ADD_CONTACT } from '../../Actions/contacts';

const AddContact = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const id = uuidv4();

  const onPress = () => {
    if (name && phoneNumber) {
      dispatch(
        ADD_CONTACT({
          id,
          name,
          surname,
          avatar_image: '',
          phone_number: phoneNumber,
          favorites: false,
        }),
      );
      return navigation.navigate(CONTACTS);
    }
  };

  return (
    <View style={styles.container}>
      <FiledForm
        value={name}
        placeholder="name"
        autoCapitalize="sentences"
        placeholderTextColor={colors.logan}
        icon="profile"
        onChangeText={setName}
      />
      <FiledForm
        value={surname}
        placeholder="surname"
        autoCapitalize="sentences"
        placeholderTextColor={colors.logan}
        icon="profile"
        onChangeText={setSurname}
      />
      <FiledForm
        icon="call"
        value={phoneNumber}
        placeholder="phone"
        keyboardType="phone-pad"
        placeholderTextColor={colors.logan}
        onChangeText={setPhoneNumber}
      />
      <Button title="Save" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    height: '100%',
  },
});

export default AddContact;
