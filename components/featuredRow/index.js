import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';
import { getFeaturedCategoryById } from '../../sanity';

const FeaturedRow = ({ id, title, description, ...props }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getFeaturedCategoryById(id).then(({ restaurants }) => {
      setRestaurants(restaurants);
    });
  }, [id]);

  return (
    <View {...props}>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 16 }}
        data={restaurants}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        renderItem={({ item }) => (
          <RestaurantCard
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type?.name}
            address={item.address}
            shortDescription={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        )}
      />
    </View>
  );
};

export default FeaturedRow;
