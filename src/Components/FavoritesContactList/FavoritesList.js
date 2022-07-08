import React, { useMemo } from 'react';

import checkFavorites from '../../Utils/checkFavorites';
import { FlatList } from 'react-native';
import FavoriteContact from '../FavoritesContactList/FavoriteContact';

const FavoritesList = () => {
  const favoritesList = useMemo(() => checkFavorites(), []);
  return (
    <FlatList
      data={favoritesList}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <FavoriteContact contact={item} />;
      }}
      horizontal={true}
    />
  );
};

export default FavoritesList;
