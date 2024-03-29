import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
    return new Promise ((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if(!locationMock){
            reject(new Error('NOT FOUND'));
        }
        resolve(locationMock);
    })
}

export const locationTransform = (result) => {
    const formattedLocation = camelize(result);
    const { geometry = {} } = formattedLocation.results[0];
    const { lat, lng } = geometry.location;

    return {lat, lng, viewport: geometry.viewport};
}