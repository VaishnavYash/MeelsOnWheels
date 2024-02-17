import React, { createContext, useEffect, useMemo, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
    const [ favourites, setFavourites ] = useState([]);

    const addRestaurant = (resto) => {
        setFavourites([...favourites, resto]);
    }

    const removeRestaurant = (resto) => {
        const newFav = favourites.filter(
            (x) => x.placeId !== resto.placeId
        );
        setFavourites(newFav);
    }

    const obj = useMemo(() => ({
            favourites, 
            addToFav: addRestaurant,
            removeFav: removeRestaurant
        })
    );

    const saveFav = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
            console.log("Error Storing", e)
        }
    };

    const loadFav = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@favourites');
            if(jsonValue !=null){
                setFavourites(Json.parse(jsonValue))
            }
        } catch (e) {
            console.log("Error Loading", e)
        }
    };

    useEffect(() => {
        loadFav()
    }, [])
    
    useEffect(() => {
        saveFav(favourites)
    }, [ favourites ])

    return (
        <FavouritesContext.Provider value={ obj }>
            {children}
        </FavouritesContext.Provider>
    )
}