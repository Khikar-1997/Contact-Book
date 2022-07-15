import React, { useMemo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Contact from './Contact';

import filterFavorites from '../../Utils/filterFavorites';

const FavoritesList = ({ data }) => {
  const favoritesList = useMemo(() => filterFavorites(data), [data]);

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
