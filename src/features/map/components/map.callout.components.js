import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.componants";

export const MapCallout = ({ restaurants }) => {
    return(
        <CompactRestaurantInfo restaurants = { restaurants } />
    )
}