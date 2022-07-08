import React, { useMemo } from 'react';

import filterFavorites from '../../Utils/filterFavorites';
import { FlatList } from 'react-native';
import Contact from './Contact';

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
