import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/typo.components";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";

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

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`
export const CompactRestaurantInfo = ({ restaurants }) => {
    const Image = Platform.OS === "android" ? CompactWebView : CompactImage;
    return (
        <Item>
            <Image source = {{ uri: restaurants.photos[0]}}/>
            <Text center variant = "caption" numberOfLines={3}>
                {restaurants.name}
            </Text>
        </Item>
    )
}