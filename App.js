import React from "react";
import { RestaurantScreen } from "./src/features/restaurants/screen/restaurantsScreen";
import { StatusBar, View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme"
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald"
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato"
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

const MainView = styled.SafeAreaView`
  flex: 1;
  marginTop: ${StatusBar.currentHeight}px;
`
const Tab = createBottomTabNavigator();
const ICON_NAME = {
  Restaurants: 'ios-fast-food-outline',
  RestaurantsFocused: 'ios-fast-food-outline',
  SettingsFocused: 'ios-settings',
  Settings: 'ios-settings-outline',
  MapsFocused: 'ios-map',
  Maps: 'ios-map-outline'
}

const createScreenOption = ({ route }) => {
  
  return {
    tabBarIcon: ({ focused, size, color }) => {
      const iconName = focused ? ICON_NAME[route.name +'Focused'] : ICON_NAME[route.name];
      return <Ionicons name={iconName} size={size} color={color} />
    },
  }
};

const SettingsScreen = () => <Text>Setting!</Text>
const MapsScreen = () => <Text>Maps!</Text>

export default function App() {
  const [oswaldLoader] = useOswald({Oswald_400Regular});
  const [latoLoader] = useLato({Lato_400Regular})


  if (!oswaldLoader && !latoLoader) {
    return null;
  }

  return (
    <MainView>
      <ThemeProvider theme={theme}>       
        <NavigationContainer >
          <Tab.Navigator
            screenOptions={createScreenOption}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}            
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Maps" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </MainView>
  );
}
