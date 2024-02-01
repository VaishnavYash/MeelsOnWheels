import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { View, FlatList, TouchableOpacity } from "react-native";
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
export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants} = useContext(RestaurantContext);
  // console.log(navigation)

  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <LoadView >
          <Loading size={50} animating = {isLoading} color = {Colors.blue300}/>
        </LoadView>
      )}

      <Search />
      
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
