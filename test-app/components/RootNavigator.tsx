import { View, Text, useColorScheme } from "react-native";
import React, { FC, useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import useColors from "../style/useColors";

const RootNavigator = ({ children }: React.PropsWithChildren) => {
  const { colors } = useColors();
  const colorScheme = useColorScheme();

  //   useEffect(() => {
  //     applyColors(colorScheme === "dark" ? Colors.dark : Colors.light);
  //   }, [applyColors, colorScheme]);
  return <View>{children}</View>;
};

export default RootNavigator;
