import React from "react";
import { Searchbar } from "react-native-paper";
import { View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.lrg};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.lrg};
  backgroundcolor: ${(props) => props.theme.colors.bg.lightCyan};
`;

export const RestaurantScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </View>
  );
};
