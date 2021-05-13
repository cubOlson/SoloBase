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
        console.log('CAPTION', photo.caption)
        return (
                <img src={photo.url} alt={photo.caption} key={photo.caption}/>
        );
        });
    
    return (
        <div className="photosDiv">
            {photosElement}
        </div>
    )
}

export default PhotosBox;