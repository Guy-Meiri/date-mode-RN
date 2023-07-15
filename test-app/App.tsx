import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TColors } from "./style/colors";
import Home from "./components/Home";
import { ThemeProvider } from "./style/ThemeContext";
import RootNavigator from "./components/RootNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator>
        <Home />
      </RootNavigator>
    </ThemeProvider>
  );
}
