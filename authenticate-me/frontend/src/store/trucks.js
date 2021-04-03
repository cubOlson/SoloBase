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

export const getOneTruck = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/trucks/${id}`);
    if (!response.ok) {
        throw response;
    }

    const truck = await response.json();
    dispatch(setOneTruck(truck));
}

export const addNewTruck = (truck) => async (dispatch) => {

    const { name, description, locationId, phone, website, foodType, priceRange } = truck;

    const response = await csrfFetch('/api/trucks', {
        method: 'POST',
        body: JSON.stringify({
            name,
            description,
            locationId,
            phone,
            website,
            foodType,
            priceRange
        })
    });

    const newTruck = await response.json();
    dispatch(addTruck(newTruck));
}

const trucksReducer = (trucks = {}, action) => {
    let newTrucks;
    switch (action.type) {
        case SET_TRUCKS:
            const trucksPayload = action.payload;
            newTrucks = {};
            for (const truck of trucksPayload) {
                newTrucks[truck.id] = truck;
            }
            return newTrucks;
        case SET_ONE_TRUCK:
            const truckPayload = action.payload[0];
            return truckPayload;
        case ADD_TRUCK:
            const newTruckPayload = action.payload;
            newTrucks = {...trucks, newTruckPayload}
            return newTrucks;
        default:
            return trucks;
    }
}

export default trucksReducer;