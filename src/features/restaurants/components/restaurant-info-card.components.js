import React from "react";
import { View } from "react-native";
import star  from "../../../../assets/star";
import open  from "../../../../assets/open";
import close  from "../../../../assets/closed";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/typo.components";
import {
    RestaurantCardCover,
    RestaurantCard,
    Info,
    Rating,
    Section,
    SectionEnd,
    Open,
    Icon
} from "./restaurant-info-card.styles";


export const RestaurantInfoCard = ({ restaurant = {}}) => {
    const {
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
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}} />
            <Info>
                <Text variant = "label"> {name} </Text>
                <Section>
                    <Rating>
                        {ratingArray.map((item, index) => {
                            const newItem = { ...item, id: index + 1 };
                            return <Open key={newItem.id} xml={star} width={20} height={20} />;
                        })}    
                    </Rating>

                    <SectionEnd>
                        {isClosedTemporarily && (
                        <Text variant="error">
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
                        <Icon source = {{ uri : icon }}/>
                    </SectionEnd>
                </Section>           
                <Text variant = "caption"> {address} </Text>
            </Info>
            
        </RestaurantCard>
    </View>
  );
};
