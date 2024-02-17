import React, { createContext, useEffect, useMemo, useState } from "react"

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

    return (
        <FavouritesContext.Provider value={ obj }>
            {children}
        </FavouritesContext.Provider>
    )
}