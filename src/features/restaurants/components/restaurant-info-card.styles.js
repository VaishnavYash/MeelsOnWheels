import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space.md};
    backgroundColor: ${(props) => props.theme.colors.primary};
`;
export const Info = styled.View`
    padding: ${(props) => props.theme.space.md};
`;
export const Rating = styled.View`
    flexDirection: row;
`
export const Section = styled.View`
    flexDirection: row;
    align-items: center;
`
export const SectionEnd = styled.View`
    flex: 1;
    flexDirection: row;
    justifyContent: flex-end;
`
export const Open = styled(SvgXml)`
    flexDirection: row;
`
export const Icon = styled.Image`
    width: 25;
    height: 25; 
`