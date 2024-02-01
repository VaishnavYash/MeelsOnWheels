import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();
const ICON_NAME = {
    Restaurants: 'ios-fast-food-outline',
    RestaurantsFocused: 'ios-fast-food-outline',
    SettingsFocused: 'ios-settings',
    Settings: 'ios-settings-outline',
    MapsFocused: 'ios-map',
    Maps: 'ios-map-outline'
  }
  
const SettingsScreen = () => {return <Text>Setting!</Text>};
const MapsScreen = () => {return <Text>Maps!</Text>};

const createScreenOption = ({ route }) => {
    return {
      tabBarIcon: ({ focused, size, color }) => {
        const iconName = focused ? ICON_NAME[route.name +'Focused'] : ICON_NAME[route.name];
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShow: true, 
    }
  };
  

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOption}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Maps" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)