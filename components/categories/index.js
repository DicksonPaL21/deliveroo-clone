import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {[...Array(10).keys()].map((idx) => (
        <CategoryCard
          imgUrl={`https://picsum.photos/200/300?random=${idx + 1}`}
          title="Testing"
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
