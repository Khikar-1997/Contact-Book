import React from 'react';
import { FlatList } from 'react-native';

import MOCK_DATA from '../../../data/MOCK_DATA.json';

import Contact from './Contact';

const ContactsList = () => (
  <FlatList
    data={MOCK_DATA}
    keyExtractor={item => item.id}
    renderItem={({ item }) => {
      return (
        <Contact
          name={item?.name}
          surname={item?.surname}
          image={item?.avatar_image}
          phoneNumber={item?.phone_number}
        />
      );
    }}
  />
);

export default ContactsList;
