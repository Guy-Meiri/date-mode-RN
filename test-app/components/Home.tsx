import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useStyles from "../style/useStyles";
import { TColors } from "../style/colors";

const Home = () => {
  const { styles } = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text>hello 1</Text>
    </View>
  );
};

const createStyles = (colors: TColors) => {
  console.log(colors + ": tests");
  return StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      alignItems: "center",
      justifyContent: "center",
    },
  });
};

export default Home;
