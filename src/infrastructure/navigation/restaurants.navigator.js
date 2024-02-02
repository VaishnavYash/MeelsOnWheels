import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantScreen } from '../../features/restaurants/screen/restaurantsScreen';
import { RestaurantDetailScreen } from '../../features/restaurants/screen/restaurantsDetailScreen';

const RestaurantStack = createStackNavigator();
export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
                headerShown: false
            }}
            >
            <RestaurantStack.Screen 
                name = "Restaurants"
                component = { RestaurantScreen }
            />
            <RestaurantStack.Screen
                name = "RestaurantDetail"
                component={ RestaurantDetailScreen }
            />
        </RestaurantStack.Navigator>
    );
};