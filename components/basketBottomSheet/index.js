import React, { useState, useCallback, useMemo, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../../redux/reducer/restaurant";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../../redux/reducer/basket";
import Currency from "react-currency-formatter";
import colors from "tailwindcss/colors";
import BasketIcon from "./BasketIcon";
import { urlFor } from "../../sanity";

const BasketBottomSheet = () => {
  const sheetRef = useRef(null);
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const snapPoints = useMemo(() => ["70%", "100%"], []);

  const handleSheetChange = useCallback((index) => {
    setIsBottomSheetOpen(index > -1 ? true : false);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const removeItemById = (id) => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      {!isBottomSheetOpen && <BasketIcon onPress={() => handleSnapPress(0)} />}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        index={-1}
        backgroundStyle={{ backgroundColor: colors.gray[100] }}
        handleStyle={{ backgroundColor: colors.white }}
      >
        <BottomSheetView style={{ height: "70%" }}>
          <View className="bg-white border-b border-[#00CCBB] pb-5 shadow-xs">
            <View>
              <Text className="font-bold text-lg text-center">Basket</Text>
              <Text className="text-center text-gray-400">
                {restaurant.title}
              </Text>
            </View>
            <TouchableOpacity
              className="absolute bg-gray-100 rounded-full right-5"
              onPress={handleClosePress}
            >
              <XCircleIcon color="#00CCBB" height={50} width={50} />
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center bg-white space-x-4 px-4 py-3 my-5">
            <Image
              // source={{ uri: urlFor(image)?.url() }}
              source={{ uri: "https://picsum.photos/200/300" }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            className="divide-y divide-gray-200 mb-5"
            showsVerticalScrollIndicator={false}
          >
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View
                key={key}
                className="flex-row items-center bg-white space-x-3 py-2 px-4"
              >
                <Text className="text-[#00CCBB]">{items.length}x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image)?.url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600">
                  <Currency currency="PHP" quantity={items[0]?.price} />
                </Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB] text-xs"
                    onPress={() => removeItemById(key)}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          <View className="bg-white space-y-4 p-5 mt-auto">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Subtotal</Text>
              <Text className="text-gray-400">
                <Currency currency="PHP" quantity={total} />
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Delivery Fee</Text>
              <Text className="text-gray-400">
                <Currency currency="PHP" quantity={80} />
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Order Total</Text>
              <Text className="font-extrabold">
                <Currency currency="PHP" quantity={total + 80} />
              </Text>
            </View>
            <TouchableOpacity
              className="bg-[#00CCBB] rounded-lg p-4"
              onPress={() => navigation.navigate("PreparingOrder")}
            >
              <Text className="text-white text-center text-lg font-bold">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default BasketBottomSheet;
