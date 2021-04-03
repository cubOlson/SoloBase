import { csrfFetch } from './csrf';

const SET_TRUCK_REVIEWS = 'reviews/SET_TRUCK_REVIEWS';
const ADD_TRUCK_REVIEW = 'reviews/ADD_TRUCK_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const setTruckReviews = (reviews) => {
    return {
        type: SET_TRUCK_REVIEWS,
        payload: reviews
    };
}

const addTruckReview = (review) => {
    return {
        type: ADD_TRUCK_REVIEW,
        payload: review
    };
}

const deleteReview = () => {
    return {
        type: DELETE_REVIEW
    }
}

export const getTruckReviews = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/truck/${id}`);
    if (!response.ok) {
        throw response;
    }

    const reviews = await response.json();
    dispatch(setTruckReviews(reviews));
}

export const addReview = (review) => async (dispatch) => {

    const { truckId, userId, title, content, stars } = review;

    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
            truckId,
            userId,
            title,
            content,
            stars
        })
    });

    const newReview = await response.json();
    dispatch(addTruckReview(newReview));
}

export const getDeleteReview = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    });

    dispatch(deleteReview());
    return response;
}

const reviewsReducer = (reviews = {}, action) => {
    let newReviews;
    switch (action.type) {
        case SET_TRUCK_REVIEWS:
            const reviewsPayload = action.payload;
            newReviews = {};
            for (const review of reviewsPayload) {
                newReviews[review.id] = review;
            }
            return newReviews;
        case ADD_TRUCK_REVIEW:
            const reviewPayload = action.payload;
            newReviews = {...reviews, reviewPayload}
            return newReviews;
        case DELETE_REVIEW:
            return reviews;
        default:
            return reviews;
    }
}

export default reviewsReducer;