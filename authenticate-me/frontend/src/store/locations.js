import { csrfFetch } from './csrf';

const SET_LOCATIONS = 'locations/SET_LOCATIONS';

const setLocations = (locations) => {
    return {
        type: SET_LOCATIONS,
        payload: locations
    };
}

export const getLocations = () => async (dispatch) => {

    const response = await csrfFetch(`/api/locations`);
    if (!response.ok) {
        throw response;
    }

    const locations = await response.json();
    dispatch(setLocations(locations));
}

const locationsReducer = (locations = {}, action) => {
    let newLocations;
    switch (action.type) {
        case SET_LOCATIONS:
            const locationsPayload = action.payload;
            newLocations = {};
            for (const location of locationsPayload) {
                newLocations[location.id] = location;
            }
            return newLocations;
        default:
            return locations;
    }
}

export default locationsReducer;