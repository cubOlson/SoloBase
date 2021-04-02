import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTruckReviews } from '../../store/reviews';
import { useParams } from 'react-router-dom';

import './TruckReviews.css';

function ReviewBox () {
    const reviews = useSelector(state => state.reviews);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTruckReviews(id));
    }, [dispatch, id]);
    
    const reviewsElement = Object.values(reviews).map(review => {
        return (
            <li key={review.id} className="reviewLi">
                <h3>{review.title}</h3>
                <p>{review.content}</p>
            </li>
        );
        });

    return (
        <ul className="reviewsDiv">
            {reviewsElement}
        </ul>
    )
}

export default ReviewBox;