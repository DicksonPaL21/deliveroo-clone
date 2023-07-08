import React from "react";
import MapView, { Marker } from "react-native-maps";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../../redux/reducer/restaurant";
import { XMarkIcon } from "react-native-heroicons/solid";
import Lottie from "lottie-react-native";
import * as Progress from "react-native-progress";
import rider from "../../assets/images/delivery.webp";

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB]">
      <View className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white text-lg- font-light">Order Help</Text>
        </View>
        <View className="bg-white rounded-md shadow-md p-6 mx-5 my-2 z-50">
          <View className="relative">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <View className="absolute w-28 h-28 top-[-18] right-[-15]">
              <Lottie
                source={require("../../assets/images/lottie/man-riding-scooter.json")}
                autoPlay
                loop
              />
            </View>
          </View>
          <Progress.Bar color="#00CCBB" size={30} indeterminate={true} />
          <Text className="text-gray-500 mt-3">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedstandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <View className="bg-white flex-row items-center space-x-5 h-20">
        <Image
          source={rider}
          className="h-12 w-12 bg-gray-300 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">John Doe</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </View>
    </SafeAreaView>
  );
};

export default Delivery;
