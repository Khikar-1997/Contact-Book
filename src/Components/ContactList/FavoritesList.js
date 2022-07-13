import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import Contact from './Contact';

import filterFavorites from '../../Utils/filterFavorites';

const FavoritesList = ({ data }) => {
  const favoritesList = useMemo(() => filterFavorites(data), [data]);

  return (
    <FlatList
      data={favoritesList}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Contact contact={item} isFavorite />}
      horizontal
    />
  );
};

export default FavoritesList;
