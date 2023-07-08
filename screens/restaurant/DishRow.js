import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  incrementItemCountById,
  decrementItemCountById,
  removeFromBasket,
  selectBasketItemById,
} from "../../redux/reducer/basket";
import Currency from "react-currency-formatter";
import colors from "tailwindcss/colors";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) => selectBasketItemById(state, id));
  const [isPressed, setIsPressed] = useState(false);

  const addItemToBasket = () => {
    if (!item) {
      dispatch(addToBasket({ id, name, description, price, image, count: 1 }));
      return;
    }
    dispatch(incrementItemCountById({ id }));
  };

  const removeItemFromBasket = () => {
    if (item?.count === 1) {
      dispatch(removeFromBasket({ id }));
      return;
    }
    dispatch(decrementItemCountById({ id }));
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsPressed(!isPressed)}>
        <View
          className={`flex-row bg-white border border-gray-200 p-4 ${
            isPressed && "border-b-0"
          }`}
        >
          <View className="flex-1 pr-2">
            <Text className="text-lg- mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency currency="PHP" quantity={price} />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image)?.url() }}
              className="w-20 h-20 bg-gray-300 p-4"
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!item?.count}
            >
              <MinusCircleIcon
                size={40}
                color={item?.count ? "#00CCBB" : colors.gray[400]}
              />
            </TouchableOpacity>
            <Text>{item?.count ?? 0}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
