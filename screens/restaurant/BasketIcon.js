import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
  selectBasketItems,
  selectBasketTotal,
} from '../../redux/reducer/backet';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="flex-row items-center space-x-1 bg-[#00CCBB] rounded-lg mx-5 p-4"
        onPress={() => navigation.navigate('Basket')}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] rounded-lg py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency currency="PHP" quantity={total} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
