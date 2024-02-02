import React, { useState } from "react";
import { List } from 'react-native-paper'
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";


export const RestaurantDetailScreen = ( { route } ) => {
    const { restau } = route.params
    
    const [ breakfast, setBreakfast ] = useState(false);
    const [ lunch, setLunch ] = useState(false);
    const [ dinner, setDinner ] = useState(false);
    const [ drinks, setDrinks ] = useState(false);


    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={ restau }/>
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => {<List.Icon {...props} icon="bread-slice" />}}
                    expanded={breakfast}
                    onPress={() => setBreakfast(!breakfast)}>
                    <List.Item title="Dosa" />
                    <List.Item title="Idli" />
                    <List.Item title="Rawa Dosa" />
                    <List.Item title="Sandwich" />
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={(props) => {<List.Icon {...props} icon="food"/>}}
                    expanded={lunch}
                    onPress={() => setLunch(!lunch)}>
                    <List.Item title="Daal Roti" />
                    <List.Item title="Paneer Roti" />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>

                <List.Accordion
                    title="Dinner"
                    left={(props) => {<List.Icon {...props} icon="food-variant"/>}}
                    expanded={dinner}
                    onPress={() => setDinner(!dinner)}>
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Daal Roti Night" />
                    <List.Item title="Thali" />
                </List.Accordion>

                <List.Accordion
                    title="Drinks"
                    left={(props) => {<List.Icon {...props} icon="glass-cocktail"/>}}
                    expanded={drinks}
                    onPress={() => setDrinks(!drinks)}>
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Coke" />
                    <List.Item title="Fanta" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    )
}