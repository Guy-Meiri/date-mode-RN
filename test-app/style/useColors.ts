import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TColors } from "./colors";

interface ColorType {
  colors: TColors;
  //   applyColors: (colors: TColors) => void;
}

const useColors = (): ColorType => {
  const store = useContext(ThemeContext);
  if (!store) {
    throw new Error("useColors must be defined.");
  }
  console.log("useColors.ts: store: ", store);
  return {
    // applyColors: store.applyColors,
    colors: store.colors,
  };
};

export default useColors;
