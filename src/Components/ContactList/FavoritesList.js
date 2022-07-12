import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import Contact from './Contact';

import filterFavorites from '../../Utils/filterFavorites';

const FavoritesList = ({ data }) => {
  const favoritesList = useMemo(() => filterFavorites(data), [data]);

  const renderItem = ({ item }) => {
    return <Contact contact={item} isFavorite />;
  };

  return (
    <FlatList
      data={favoritesList}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default FavoritesList;
