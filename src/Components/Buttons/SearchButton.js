import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import colors from '../../Constants/colors';

import imagePaths from '../../Constants/imagePaths';
import { SEARCH_CONTACT } from '../../Constants/navigationRouts';

const SearchButton = ({ navigation }) => {
  return (
    <View style={styles.searchButtonContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate(SEARCH_CONTACT)}
        style={styles.searchButton}>
        <Image source={imagePaths.searchIcon} />
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

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
