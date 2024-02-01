import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
    console.log(location)
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        // console.log(mock)
        if(!mock){
            reject(new Error('Location Not Found'));
        }
        resolve(mock);
    });
}


export function restaurantsTransform({ results = [] }) {
    const changedData = results.map((restaurants) => {
        restaurants.photos = restaurants.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restaurants,
            isClosedTemporarily: restaurants.business_status == "CLOSED_TEMPORARILY",
            isOpenNow: restaurants?.opening_hours?.open_now,
            address: restaurants.vicinity,
        };
    });
    return camelize(changedData);
}