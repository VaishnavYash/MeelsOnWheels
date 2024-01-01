import React from "react";
import { View, Image, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg"
import star  from "../../../../assets/star"
import open  from "../../../../assets/open"
import close  from "../../../../assets/closed"
import { Spacer } from "../../../components/spacer.components";

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space.md};
    backgroundColor: ${(props) => props.theme.colors.primary};
`;
const Info = styled.View`
    padding: ${(props) => props.theme.space.md};
`;
const Rating = styled.View`
    flexDirection: row;
`
const Section = styled.View`
    flexDirection: row;
    align-items: center;
`
const SectionEnd = styled.View`
    flex: 1;
    flexDirection: row;
    justifyContent: flex-end;
`
const Open = styled(SvgXml)`
    flexDirection: row;
`


export const RestaurantInfoCard = ({ restaurant = {}}) => {
    const {
        id = "1",
        name = "Y@$H",
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = ["https://images.unsplash.com/photo-1502842300859-b26617c82f7f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMGVudHJhbmNlfGVufDB8fDB8fHww"],
        address = "NEAR RESTRAU",
        isOpenNow = true,
        rating = 4.8,
        isClosedTemporarily = true
    } = restaurant

    const ratingArray = Array.from(new Array(Math.floor(rating)))
  return (
    <View>
        <Card elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}} />
            <Info>
                <Title> {name} </Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => <SvgXml xml = {star} width={20} height={20}/>)}         
                    </Rating>    
                    
                    <SectionEnd>
                        {isClosedTemporarily && (
                        <Text variant="label" style={{ color: "red"}}>
                            CLOSED TEMPORARILY
                        </Text>
                        )}

                        <Spacer position = "left" size = "large" />
                        {(isOpenNow && !isClosedTemporarily) ? (
                            <Open xml ={open} width={25} height={25}/>
                            ) : (
                            <Open xml ={close} width={25} height={25}/>
                        )}

                        <Spacer position = "left" size = "large" />
                        <Image style = {{ width: 25, height: 25 }} source = {{ uri : icon }}/>
                    </SectionEnd>
                </Section>           
                <Address> {address} </Address>
            </Info>
            
        </Card>
    </View>
  );
};
