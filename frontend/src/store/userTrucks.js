import { csrfFetch } from './csrf';

const SET_USER_TRUCKS = 'userTrucks/SET_USER_TRUCKS';

const setUserTrucks = (trucks) => {
    return {
        type: SET_USER_TRUCKS,
        payload: trucks
    };
}

export const getUserTrucks = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/userTrucks/${id}`);
    if (!response.ok) {
        throw response;
    }

    const trucks = await response.json();
    dispatch(setUserTrucks(trucks));
}

const userTrucksReducer = (trucks = {}, action) => {
    let newTrucks;
    switch (action.type) {
        case SET_USER_TRUCKS:
            const trucksPayload = action.payload;
            newTrucks = {};
            for (const truck of trucksPayload) {
                newTrucks[truck.id] = truck;
            }
            return newTrucks;
        default:
            return trucks;
    }
}

export default userTrucksReducer;