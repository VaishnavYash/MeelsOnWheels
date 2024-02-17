import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
    // console.log(location)
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
    const changedData = results.map((restro) => {
        restro.photos = restro.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restro,
            isClosedTemporarily: restro.business_status == "CLOSED_TEMPORARILY",
            isOpenNow: restro?.opening_hours?.open_now,
            address: restro.vicinity,
        };
    });
    return camelize(changedData);
}