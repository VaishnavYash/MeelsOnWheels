import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.lrg};
  backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword);
    }, []);

    return (
        <SearchView>
            <Searchbar 
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