import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Contact from './Contact';

import { selectContactListWithTitle } from '../../Selectors/contacts';

import colors from '../../Constants/colors';

const List = () => {
  const contactList = useSelector(selectContactListWithTitle);

  const rendererFunction = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      sections={contactList}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Contact contact={item} />}
      renderSectionHeader={rendererFunction}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.hostWhite,
    marginBottom: 16,
    paddingLeft: 16,
    justifyContent: 'center',
    paddingVertical: 5,
  },
  title: {
    color: colors.cornFlowerBlue,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default List;
