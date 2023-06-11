import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({
  id,
  title,
  description,
  featuredCategory,
  ...props
}) => {
  return (
    <View>
      <View className="flex-row items-center justify-between px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {[...Array(10).keys()].map((idx) => (
          <RestaurantCard
            id={123}
            imgUrl={`https://picsum.photos/200/300?random=${idx + 1}`}
            title="Yo! Sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            shortDescription="This is a test description"
            dishes={[]}
            long={20}
            lat={0}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
