import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.lrg};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
  marginTop: ${(props) => props.theme.space.xl};
`;

export const Search = ({ isFavToggled, onFavToggled }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])

    return (
        <SearchView>
            <Searchbar
                icon = {isFavToggled ? "heart" : "heart-outline"}
                onIconPress={onFavToggled}
                placeholder="Search Your City"
                value = {searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text)                    
                }}
            />
        </SearchView>
    )
}