import { csrfFetch } from './csrf';

const SET_TRUCK_PHOTOS = 'photos/SET_TRUCK_PHOTOS';
const SET_MENU_PHOTO = 'photos/SET_MENU_PHOTO';

const setPhotos = (photos) => {
    return {
        type: SET_TRUCK_PHOTOS,
        payload: photos
    }
}

const setMenuPhoto = (photo) => {
    return {
        type: SET_MENU_PHOTO,
        payload: photo
    }
}

export const getPhotos = (id) => async (dispatch) => {
    
    const response = await csrfFetch(`/api/photos/${id}`);
    if (!response.ok) {
        throw response;
    }

    const photos = await response.json();
    dispatch(setPhotos(photos));
}

export const getMenu = (id) => async (dispatch) => {
    
    const response = await csrfFetch(`/api/photos/${id}/menu`);
    if (!response.ok) {
        throw response;
    }

    const photo = await response.json();
    dispatch(setMenuPhoto(photo));
}

const photosReducer = (photos = {}, action) => {
    switch (action.type) {
        case SET_TRUCK_PHOTOS:
            const photosPayload = action.payload;
            const newPhotos = {};
            for (const photo of photosPayload) {
                newPhotos[photo.id] = photo;
            }
            return newPhotos;
        case SET_MENU_PHOTO:
            const photoPayload = action.payload[0];
            return photoPayload;
        default:
            return photos;
    }
}

export default photosReducer;