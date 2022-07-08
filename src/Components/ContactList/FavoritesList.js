import React, { useMemo } from 'react';

import filterFavorites from '../../Utils/filterFavorites';
import { FlatList } from 'react-native';
import Contact from './Contact';

const FavoritesList = ({ data }) => {
  const favoritesList = useMemo(() => filterFavorites(data), [data]);
  return (
    <FlatList
      data={favoritesList}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <Contact contact={item} isFavorite />;
      }}
      horizontal
    />
  );
};

export default FavoritesList;
