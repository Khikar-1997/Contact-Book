import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { SEARCH_CONTACT } from '../../Constants/navigationRouts';
import colors from '../../Constants/colors';
import Icons from '../../UIKit/Icons';

const SearchButton = ({ navigation, contacts }) => (
  <View style={styles.searchButtonContainer}>
    <TouchableOpacity
      style={styles.searchButton}
      onPress={() => navigation.navigate(SEARCH_CONTACT, { contacts })}>
      <Icons icon="search" />
      <Text style={styles.text}>Search</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchButtonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  searchButton: {
    backgroundColor: colors.lavender,
    borderRadius: 12,
    paddingLeft: 18,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  text: {
    paddingLeft: 10,
    color: colors.logan,
  },
});

export default SearchButton;
