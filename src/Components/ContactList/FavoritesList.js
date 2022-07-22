import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Contact from './Contact';

import { selectFilterFavorites } from '../../Selectors/contacts';

const FavoritesList = () => {
  const favoritesList = useSelector(selectFilterFavorites);

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={favoritesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Contact contact={item} isFavorite />}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
});

export default FavoritesList;
