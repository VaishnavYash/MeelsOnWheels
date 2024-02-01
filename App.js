import React from "react";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const MainView = styled.SafeAreaView`
  flex: 1;
  marginTop: ${StatusBar.currentHeight}px;
`

export default function App() {
  const [oswaldLoader] = useOswald({Oswald_400Regular});
  const [latoLoader] = useLato({Lato_400Regular});

  if (!oswaldLoader || !latoLoader) {
    return null;
  }

  return (
    <MainView>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>  
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </MainView>
  );
}