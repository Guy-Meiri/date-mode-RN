import { FC, createContext, useEffect, useState } from "react";
import { TColors, MyColors } from "./colors";

type ThemeContextType = {
  colors: TColors;
  applyColors: (colors: TColors) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children?: React.ReactNode;
};

const getColors = () => {
  return MyColors.light;
};
const ThemeProvider: FC<Props> = ({ children }) => {
  const [colors, setColors] = useState<TColors>(getColors());

  const applyColors = (colorTheme: TColors) => {
    setColors(colorTheme);
  };

  return (
    <ThemeContext.Provider value={{ colors, applyColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
