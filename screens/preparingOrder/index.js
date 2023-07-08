import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import Lottie from "lottie-react-native";

const PreparingOrder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#00CCBB]">
      <Animatable.View
        iterationCount={1}
        animation="slideInUp"
        className="h-96 w-96"
      >
        <Lottie
          source={require("../../assets/images/lottie/order-waiting.json")}
          autoPlay
          loop
        />
      </Animatable.View>
      <Animatable.Text
        iterationCount={1}
        animation="slideInUp"
        className="text-white text-center text-lg font-bold mb-10"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrder;
