import { StyleSheet } from "react-native";
import { useMemo } from "react";
import { TColors } from "./colors";
import useColors from "./useColors";

interface Styles<T extends StyleSheet.NamedStyles<T>> {
  colors: TColors;
  styles: T;
}

export default function <T extends StyleSheet.NamedStyles<T>>(
  createStyle: (colors: TColors) => T
): Styles<T> {
  const { colors } = useColors();
  console.log("useStyles.ts: colors: ", colors);
  return {
    colors: colors,
    styles: useMemo(() => createStyle(colors), [colors, createStyle]),
  };
}
