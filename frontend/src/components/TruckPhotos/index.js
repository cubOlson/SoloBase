import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';
import { useParams } from 'react-router-dom';

import './TruckPhotos.css';

function PhotosBox () {
    const photos = useSelector(state => state.photos);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos(id));
    }, [dispatch, id]);

    const photosElement = Object.values(photos).map(photo => {
        return (
            <li key={photo.id}>
                <img src={photo.url} alt={photo.caption} />
            </li>
        );
        });
    
    return (
        <ul className="photosDiv">
            {photosElement}
        </ul>
    )
}

export default PhotosBox;