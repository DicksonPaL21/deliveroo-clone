import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CategoryCard from './CategoryCard';
import { getCategories } from '../../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      data={categories}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <CategoryCard imgUrl={item.image} title={item.name} />
      )}
    />
  );
};

export default Categories;
