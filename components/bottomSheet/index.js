import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";

const BottomSheetPage = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );

  // callbacks
  const handleSheetChanges = useCallback((index) => {}, []);
  const handleSnapPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // renders
  return (
    <View className="bg-white" style={styles.container}>
      <ScrollView className="pt-20">
        <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-56 bg-gray-300 p-4"
        />
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        // backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Button title="Snap To 100%" onPress={() => handleSnapPress(2)} />
          <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
          <Button title="Close" onPress={() => handleClosePress()} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    // flex: 1,
    // alignItems: "center",
  },
});

export default BottomSheetPage;
