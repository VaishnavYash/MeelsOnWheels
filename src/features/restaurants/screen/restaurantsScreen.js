import React from "react";
import { Searchbar } from "react-native-paper";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.lrg};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchView>
        <Searchbar />
      </SearchView>
      <FlatList
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5}
        ]}
        renderItem = {() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />     
        
    </View>
  );
};
