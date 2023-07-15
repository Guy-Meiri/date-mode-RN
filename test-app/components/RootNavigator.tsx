import { View, Text, useColorScheme } from "react-native";
import React, { FC, useEffect } from "react";
import useColors from "../style/useColors";
import { MyColors } from "../style/colors";

const RootNavigator = ({ children }: React.PropsWithChildren) => {
  const { applyColors } = useColors();
  const colorScheme = useColorScheme();

  useEffect(() => {
    applyColors(colorScheme === "dark" ? MyColors.dark : MyColors.light);
  }, [applyColors, colorScheme]);
  return <View>{children}</View>;
};

export default RootNavigator;
