import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/typo.components";

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
    const temp = restaurant.photos;
    return (
        <Item>
            <CompactImage source={{ uri: temp[0] }} />
            <Text center variant = "caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}