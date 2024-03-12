import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
  const favorites = useSelector((state) => state.recipes.favorites);

  if (!favorites || favorites.length === 0) {
    return <Text>No favorites added yet</Text>;
  }

  return (
    <View>
      <Text>Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
