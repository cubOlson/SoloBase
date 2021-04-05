import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../store/photos';
import { useParams } from 'react-router-dom';

import './MenuPhoto.css';

function MenuBox () {
    const photos = useSelector(state => state.photos);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenu(id));
    }, [dispatch, id]);

    return (
        <img src={photos.url} alt={photos.caption} />
    )
}

export default MenuBox;