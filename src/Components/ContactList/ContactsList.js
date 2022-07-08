import React, { useMemo } from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

import contactListInMap from '../../Utils/contactListWithTitle';
import colors from '../../Constants/colors';

import Contact from './Contact';

const ContactsList = () => {
  const data = useMemo(() => contactListInMap(), []);
  return (
    <SectionList
      sections={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <Contact contact={item} />;
      }}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.hostWhite,
    height: 26,
    marginBottom: 15,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 17,
    color: colors.cornFlowerBlue,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ContactsList;
