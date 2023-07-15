import { View, Text, StyleSheet } from "react-native";
import React from "react";
import useStyles from "../style/useStyles";
import { TColors } from "../style/colors";

const Home = () => {
  const { styles } = useStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        hello 1 fffffffffffffffffffffffffffffffffffffffffffffffff
      </Text>
      <Text style={styles.text}>
        hello 1 fffffffffffffffffffffffffffffffffffffffffffffffff
      </Text>
    </View>
  );
};

const createStyles = (colors: TColors) => {
  console.log(colors.black);
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary,

      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: colors.textPrimary,
    },
  });
};

export default Home;
