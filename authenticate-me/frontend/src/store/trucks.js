import { csrfFetch } from './csrf';

const SET_TRUCKS = 'trucks/SET_TRUCKS';
const ADD_TRUCK = 'trucks/ADD_TRUCK';

const setTrucks = (trucks) => {
    return {
        type: SET_TRUCKS,
        payload: trucks
    };
}

const addTruck = (truck) => {
    return {
        type: ADD_TRUCK,
        payload: truck
    };
}

export const getTrucks = () => async (dispatch) => {

    const response = await csrfFetch('/api/trucks');
    if (!response.ok) {
        throw response;
    }

    const trucks = await response.json();
    dispatch(setTrucks(trucks));
}

// export const addTruck = () => async (dispatch) => {
//     const response = await csrfFetch('/api/trucks');
//     const data = await response.json();
//     dispatch(setTrucks(data.trucks));
//     return data;
// }

const trucksReducer = (trucks = {}, action) => {
    switch (action.type) {
        case SET_TRUCKS:
            const trucksPayload = action.payload;
            const newTrucks = {};
            for (const truck of trucksPayload) {
                newTrucks[truck.id] = truck;
            }
            return newTrucks;
        case ADD_TRUCK:
            return trucks;
        default:
            return trucks;
    }
}

export default trucksReducer;