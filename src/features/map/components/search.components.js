import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";


const SearchView = styled.View`
  padding: ${(props) => props.theme.space.lrg};
  position: absolute;
  z-index: 999;
  width: 100%;
  marginTop: ${(props) => props.theme.space.xl};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchView>
            <Searchbar 
                placeholder="Search Your City"
                value = {searchKeyword}
                icon = "map"
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