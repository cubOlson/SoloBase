import { csrfFetch } from './csrf';

const SET_TRUCK_RESERVATIONS = 'reservations/SET_TRUCK_RESERVATIONS';
const SET_USER_RESERVATIONS = 'reservations/SET_USER_RESERVATIONS';
const ADD_RESERVATION = 'reservations/SET_RESERVATIONS';
const DELETE_RESERVATION = 'reservations/DELETE_RESERVATION'

const setTruckReservations = (reservations) => {
    return {
        type: SET_TRUCK_RESERVATIONS,
        payload: reservations
    };
}

const setUserReservations = (reservations) => {
    return {
        type: SET_USER_RESERVATIONS,
        payload: reservations
    };
}

const addReservation = (reservation) => {
    return {
        type: ADD_RESERVATION,
        payload: reservation
    };
}

const deleteReservation = () => {
    return {
        type: DELETE_RESERVATION
    }
}

export const getTruckReservations = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/reservations/truck/${id}`);
    if (!response.ok) {
        throw response;
    }

    const reservations = await response.json();
    dispatch(setTruckReservations(reservations));
}

export const getUserReservations = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/reservations/user/${id}`);
    if (!response.ok) {
        throw response;
    }

    const reservations = await response.json();
    dispatch(setUserReservations(reservations));
}

export const addAReservation = (reservation) => async (dispatch) => {

    const { truckId, name, address1, address2, date, email, phone, userId } = reservation;

    const response = await csrfFetch(`/api/reservations`, {
        method: 'POST',
        body: JSON.stringify({
            truckId,
            name,
            address1,
            address2,
            date,
            email,
            phone,
            userId
        })
    });

    const newReservation = await response.json();
    dispatch(addReservation(newReservation));
}

export const getDeleteReservation = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/reservations/${id}`, {
        method: 'DELETE'
    });

    dispatch(deleteReservation());
    return response;
}

const reservationReducer = (reservations = {}, action) => {
    let newReservations;
    let reservationPayload;
    switch (action.type) {
        case SET_TRUCK_RESERVATIONS:
            reservationPayload = action.payload;
            newReservations = {};
            for (const reservation of reservationPayload) {
                newReservations[reservation.id] = reservation;
            }
            return newReservations;
        case SET_USER_RESERVATIONS:
            reservationPayload = action.payload;
            newReservations = {};
            for (const reservation of reservationPayload) {
                newReservations[reservation.id] = reservation;
            }
            return newReservations;
        case ADD_RESERVATION:
            reservationPayload = action.payload;
            newReservations = {...reservations, reservationPayload}
            return newReservations;
        case DELETE_RESERVATION:
            return reservations;
        default:
            return reservations;
    }
}

export default reservationReducer;