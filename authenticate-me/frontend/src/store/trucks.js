import { csrfFetch } from './csrf';

const SET_TRUCKS = 'trucks/SET_TRUCKS';
const SET_ONE_TRUCK = 'trucks/SET_ONE_TRUCK';
const ADD_TRUCK = 'trucks/ADD_TRUCK';

const setTrucks = (trucks) => {
    return {
        type: SET_TRUCKS,
        payload: trucks
    };
}

const setOneTruck = (truck) => {
    return {
        type: SET_ONE_TRUCK,
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

export const getOneTruck = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/trucks/${id}`);
    if (!response.ok) {
        throw response;
    }

    const truck = await response.json();
    dispatch(setOneTruck(truck));
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
        case SET_ONE_TRUCK:
            const truckPayload = action.payload[0];
            return truckPayload;
        case ADD_TRUCK:
            return trucks;
        default:
            return trucks;
    }
}

export default trucksReducer;