import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.components";
const Loading = styled(ActivityIndicator)`
  margin-left: -25;
`;
const LoadView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const RestaurantScreen = () => {
  const { isLoading, restaurants} = useContext(RestaurantContext);
  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <LoadView >
          <Loading size={50} animating = {isLoading} color = {Colors.blue300}
          />
        </LoadView>
      )}

      <Search />
      
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return(
            <RestaurantInfoCard restaurant={ item   }
            />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
