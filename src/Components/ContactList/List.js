import React, { useMemo } from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

import contactListWithTitle from '../../Utils/contactListWithTitle';
import colors from '../../Constants/colors';

import Contact from './Contact';

const List = ({ data }) => {
  const contactList = useMemo(() => contactListWithTitle(data), [data]);
  return (
    <SectionList
      sections={contactList}
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
