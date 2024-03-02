import React from "react";
import { SafeAreaView, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapsScreen } from "../../features/map/screen/mapScreen";


const Tab = createBottomTabNavigator();
const ICON_NAME = {
    Restaurants: 'ios-fast-food-outline',
    RestaurantsFocused: 'ios-fast-food-outline',
    SettingsFocused: 'ios-settings',
    Settings: 'ios-settings-outline',
    MapsFocused: 'ios-map',
    Maps: 'ios-map-outline'
  }
  
const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <Text> Setting </Text>
    </SafeAreaView>
  )
};

const createScreenOption = ({ route }) => {
    return {
      tabBarIcon: ({ focused, size, color }) => {
        const iconName = focused ? ICON_NAME[route.name +'Focused'] : ICON_NAME[route.name];
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    }
  };
  
export const AppNavigator = () => (
  <Tab.Navigator screenOptions={createScreenOption}>
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Maps" component={MapsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)