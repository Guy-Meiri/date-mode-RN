import { FC, createContext, useEffect, useState } from "react";
import { TColors, MyColors } from "./colors";

type ThemeContextType = {
  colors: TColors;
  //   applyColors: (colors: TColors) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const getColors = () => {
  console.log("\n\n\n\ngetColors", MyColors.light);
  return MyColors.light;
};
const ThemeProvider: FC<Props> = ({ children }) => {
  console.log("\n\n\n\nThemeProvider before", MyColors.light);
  const [colors, setColors] = useState<TColors>(getColors());

  useEffect(() => {
    console.log("\n\n11effect ThemeProvider ", colors);
  }, []);

  const applyColors = (colorTheme: TColors) => {
    setColors(colorTheme);
  };
  console.log("\n\nThemeProvider2", colors);

  return (
    <ThemeContext.Provider value={{ colors }}>{children}</ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
