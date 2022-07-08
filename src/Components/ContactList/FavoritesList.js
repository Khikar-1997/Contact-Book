import React, { useMemo } from 'react';

import checkFavorites from '../../Utils/checkFavorites';
import { FlatList } from 'react-native';
import Contact from './Contact';

const FavoritesList = () => {
  const favoritesList = useMemo(() => checkFavorites(), []);
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
