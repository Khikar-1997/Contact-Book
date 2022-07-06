import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MOCK_DATA from '../../../data/MOCK_DATA.json';
import Avatar from './Avatar';
import ContactInfo from './ContactInfo';

const ContactsList = () => {
  return (
    <View>
      <FlatList
        data={MOCK_DATA}
        renderItem={contactList => {
          return (
            <View style={styles.contactListContainer}>
              <Avatar contactList={contactList} />
              <ContactInfo contactList={contactList} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactListContainer: {
    flexDirection: 'row',
    paddingBottom: 26,
    paddingLeft: 16,
  },
});

export default ContactsList;
