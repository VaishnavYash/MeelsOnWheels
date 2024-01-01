import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screen/restaurantsScreen";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import styled from "styled-components/native";

const MainView = styled.SafeAreaView`
  flex: 1;
  marginTop: ${StatusBar.currentHeight}px;
`

export default function App() {
  const [oswaldLoader] = useOswald({Oswald_400Regular});
  const [latoLoader] = useLato({Lato_400Regular})


  if (!oswaldLoader && !latoLoader) {
    return null;
  }

  return (
    <MainView>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </MainView>
  );
}
