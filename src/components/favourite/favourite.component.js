import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourite/favourites.context";
import { space } from "../../infrastructure/theme/spacing";

const FavouriteButton = styled(TouchableOpacity)`
    backgroundColor: transparent;
    top: ${space.lrg};
    right: ${space.lrg};
    position: absolute;
    z-index: 9
`;

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFav, removeFav } = useContext(FavouritesContext);
    const isFav = favourites.find((r) => r.placeId === restaurant.placeId);

    return (
        <FavouriteButton
            onPress = {() => {
                !isFav ? addToFav(restaurant) : removeFav(restaurant)
            }}
        >
            <AntDesign
                name = { isFav ? "heart" : "hearto" }
                size={23}
                color = { isFav ? "red" : "white" }
            />
        </FavouriteButton>
    );
}