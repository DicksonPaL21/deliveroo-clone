import { useRef } from "react";
import { Text } from "react-native";

export const Counter = ({ title = "" }) => {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <Text>
      Renders: {renderCounter.current}, {title}
    </Text>
  );
};
