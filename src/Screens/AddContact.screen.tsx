import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import BackButton from '../UIKit/Button';
import * as Routes from '../Constants/navigationRouts';
import FiledForm from '../Components/AddContacts/FiledForm';
import { ImageUploadForm } from '../Components/AddContacts/ImageUploadForm';

import colors from '../Constants/colors';
import { CONTACTS } from '../Constants/navigationRouts';
import { addContact } from '../Reducers/contacts';

const AddContactScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [uri, setUri] = useState<string>('');
  const pickPicture = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  };

  const onPress = () => {
    if (name && phoneNumber) {
      dispatch(
        addContact({
          name,
          surname,
          avatar_image: uri,
          phone_number: phoneNumber,
        }),
      );
      return navigation.navigate(CONTACTS);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.uploadImageContainer}>
        <ImageUploadForm uri={uri} pickPicture={pickPicture} />
      </View>
      <View style={styles.formContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  uploadImageContainer: {
    alignItems: 'center',
    paddingTop: 30,
  },
  formContainer: {
    paddingTop: 70,
    height: '100%',
  },
});

AddContactScreen.options = ({ navigation }) => ({
  headerLeft: () => (
    <BackButton
      onPress={() => navigation.navigate(Routes.CONTACTS)}
      icon="arrow"
      size="small"
    />
  ),
});

export default AddContactScreen;
