import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.components";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.componants";
import { Text } from "../typography/typo.components";


const FavouriteWrapper = styled.View`
    padding: 10px
`

export const FavouriteBar = ({ favourites, onDetail }) => {
    if(!favourites.length){return null;}

    return (
        <FavouriteWrapper>
            <Spacer varient="left.large">
                <Text varient="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restro) => {
                    const key = restro.name;
                    return (
                        <Spacer key = {key} position="left" size="medium">
                            <TouchableOpacity onPress={() => {
                                    onDetail("RestaurantDetail", {
                                        restro,
                                    })
                                }}>
                                <CompactRestaurantInfo restaurant = {restro}/>
                            </TouchableOpacity>                            
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouriteWrapper>
    )
}