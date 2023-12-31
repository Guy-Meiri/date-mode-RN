export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
};

const sharedColors = {
  black: "#000000",
  white: "#FFFFFF",
};

type SharedColors = typeof sharedColors;
//
export type TColors = ColorTheme & SharedColors;

interface IColorPalettes {
  light: TColors;
  dark: TColors;
}

export const MyColors: IColorPalettes = {
  dark: {
    ...sharedColors,
    primary: "#000000",
    secondary: "#161629",
    textPrimary: sharedColors.white,
    textSecondary: "#67686E",
  },
  light: {
    ...sharedColors,
    primary: "red",
    secondary: "#E4E4E4",
    textPrimary: "#161629",
    textSecondary: "#9D5DB0",
  },
};
