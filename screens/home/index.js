import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../../components/categories';
import FeaturedRow from '../../components/featuredRow';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center space-x-2 pt-3 pb-3 mx-4">
        <Image
          source={{ uri: 'https://picsum.photos/224' }}
          className="h-8 w-8 bg-gray-300 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-3 mx-4">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3 rounded">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <FeaturedRow
          id="featured"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="discounts"
          title="Tasty Discounts"
          description="Everyone's been enjoying these uicy discounts!"
          featuredCategory="discounts"
        />
        <FeaturedRow
          id="offers"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
