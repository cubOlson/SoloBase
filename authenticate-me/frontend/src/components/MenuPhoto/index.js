import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenu } from '../../store/photos';
import { useParams } from 'react-router-dom';

// import './TruckReviews.css';

function MenuBox () {
    const photos = useSelector(state => state.photos);
    const { id } = useParams();
    console.log('id:', id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenu(id));
    }, [dispatch, id]);
    
    console.log('photos:', photos)

    return (
        <img src={photos.url} alt={photos.caption}/>
    )
}

export default MenuBox;