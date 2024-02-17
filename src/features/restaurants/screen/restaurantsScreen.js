import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { View, FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";

import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourite/favourites.context";

import { Search } from "../components/search.components";
import { FavouriteBar } from "../../../components/favourite/favouriteBar.component";

const Loading = styled(ActivityIndicator)`
  marginLeft: -25px;
`;

const LoadView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants} = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [ isToggled, setIsToggled ] = useState(false);
  // console.log(favourites)

  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <LoadView >
          <Loading size={50} animating = {isLoading} color = {Colors.blue300}/>
        </LoadView>
      )}

      <Search
        isFavToggled = {isToggled}
        onFavToggled = {() => setIsToggled(!isToggled)}
      />
      
      {isToggled && <FavouriteBar favourites = { favourites } onDetail = {navigation.navigate} />}

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={() => {
              navigation.navigate("RestaurantDetail", { restau: item, })
              }}>
              <RestaurantInfoCard restaurant={ item }/>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
