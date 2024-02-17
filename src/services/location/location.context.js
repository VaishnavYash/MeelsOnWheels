import React, { createContext, useEffect, useMemo, useState } from 'react'
import { locationRequest, locationTransform } from './location.service';


export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {

    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState("Chicago");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {
  
        if(!keyword.length){
            return;
        }

        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setIsLoading(false);
                setLocation(result);       
                // console.log(result)         
            }).catch((err) => {
                setIsLoading(false);
                setError(err);
                // console.log(err)   
            })
    }, [keyword])

    const obj = useMemo(() => ({
            isLoading,
            error,
            location,
            search: onSearch,
            keyword
        })
    );

    return (
        <LocationContext.Provider value = {obj}>
            {children}
        </LocationContext.Provider>
    )
}
