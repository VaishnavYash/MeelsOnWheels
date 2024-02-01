import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { restaurantsTransform, restaurantsRequest } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();
export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);    
    
    const { location } = useContext(LocationContext)
    // console.log(location)

    const retrieveRestaurants = (locationString) => {
        setIsLoading(true);
        setRestaurants([])

        setTimeout(() => {
            restaurantsRequest(locationString)
                .then(restaurantsTransform)
                .then((results) => {
                setIsLoading(false);
                setRestaurants(results);
                })
                .catch((err) => {
                setIsLoading(false);
                setError(err);
                });
        }, 2000);
    };

    const obj = useMemo(() => ({
            restaurants,
            isLoading,
            error,
        })
    );

    useEffect(() => {
        if(location) {
            // console.log(location)
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location])

    return (
        <RestaurantContext.Provider value={obj} >
            {children}
        </RestaurantContext.Provider>
    )
}