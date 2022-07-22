import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import FiledForm from './FiledForm';

import colors from '../../Constants/colors';
import { CONTACTS } from '../../Constants/navigationRouts';
import { addContact } from '../../Actions/contacts';

const Index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onPress = () => {
    if (name && phoneNumber) {
      dispatch(
        addContact({
          name,
          surname,
          avatar_image: '',
          phone_number: phoneNumber,
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
        icon="profile"
        onChangeText={setName}
      />
      <FiledForm
        value={surname}
        placeholder="surname"
        autoCapitalize="sentences"
        icon="profile"
        onChangeText={setSurname}
      />
      <FiledForm
        icon="call"
        value={phoneNumber}
        placeholder="phone"
        keyboardType="phone-pad"
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
    backgroundColor: colors.white,
  },
});

export default Index;
