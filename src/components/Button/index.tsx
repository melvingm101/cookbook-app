import React from "react";
import { Text, Pressable } from "react-native";

const Button = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
