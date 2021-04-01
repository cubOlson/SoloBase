import { csrfFetch } from './csrf';

const SET_PHOTOS = 'photos/SET_PHOTOS';

const setPhotos = (photos) => {
    return {
        type: SET_PHOTOS,
        photos
    }
}

const setPhotos = () => async (dispatch) => {

}