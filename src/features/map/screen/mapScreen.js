import React, { useContext, useEffect, useState } from "react";
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native'
import { Search } from "../components/search.components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map.callout.components";

const MapViews = styled(MapView)`
    height: 100%;
`;
export const MapsScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantContext);
    const [ latDelta, setLatDelta ] = useState(0);      //to set the zoom level of the graph
    const { lat, lng, viewport } = location;

    // console.log(viewport)
    useEffect(() => {
        const northEastLat = viewport.northeast.lat;
        const southWestLat = viewport.southwest.lat;
        setLatDelta(northEastLat - southWestLat);
    },[location, viewport])

    return (
        <>
            <Search />
            <MapViews
                region = {{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}>

                { restaurants.map((restro) => {
                    return (
                        <Marker
                            key = {restro.name}
                            title = {restro.name}
                            coordinate = {{
                                latitude: restro.geometry.location.lat,
                                longitude: restro.geometry.location.lng,
                            }}
                            >
                            <Callout
                                onPress={() => {
                                    navigation.navigate("RestaurantDetail", { restro })
                                }}>
                                <MapCallout restaurants = { restro }/>
                            </Callout>
                        </Marker>
                    );
                })}
            </MapViews>
        </>
    ); 
};