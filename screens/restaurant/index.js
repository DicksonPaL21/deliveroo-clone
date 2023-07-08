import React, { useEffect } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import colors from "tailwindcss/colors";
import { StarIcon } from "react-native-heroicons/solid";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../../redux/reducer/restaurant";
import DishRow from "./DishRow";
import BasketBottomSheet from "../../components/basketBottomSheet";

const Restaurant = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurant({ ...params }));
  }, []);

  const {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    shortDescription,
    dishes,
    long,
    lat,
  } = params;

  return (
    <View>
      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(imgUrl)?.url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            className="bg-gray-100 rounded-full absolute top-14 left-5 p-2"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color={colors.green[500]} opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> &#8226;{" "}
                  {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color={colors.gray[500]} opacity={0.4} />
                <Text className="text-xs text-gray-500">
                  Nearby &#8226; {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon
              size={20}
              color={colors.gray[500]}
              opacity={0.6}
            />
            <Text className="flex-1 text-md font-bold pl-2">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="text-xl font-bold px-4 pt-6 mb-3">Menu</Text>
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
      <BasketBottomSheet />
    </View>
  );
};

export default Restaurant;
