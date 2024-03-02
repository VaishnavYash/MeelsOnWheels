import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"

import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourite/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAuq6pLnom3krWnpymrsyRCRup5kSI0Z9c",
    authDomain: "mealsonwheels-90f17.firebaseapp.com",
    projectId: "mealsonwheels-90f17",
    storageBucket: "mealsonwheels-90f17.appspot.com",
    messagingSenderId: "878694458448",
    appId: "1:878694458448:web:1b4ff46fa1d659c2251d55"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoader] = useOswald({Oswald_400Regular});
  const [latoLoader] = useLato({Lato_400Regular});

  if (!oswaldLoader || !latoLoader) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantContextProvider>  
                <Navigation />
              </RestaurantContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}