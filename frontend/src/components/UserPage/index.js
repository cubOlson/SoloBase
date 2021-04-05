import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserReviews, getDeleteReview } from '../../store/reviews';
import { getUserReservations, getDeleteReservation } from '../../store/reservations';

// import './TruckPage.css';
import '../../index.css';
import './UserPage.css';

function UserPage () {
    const reviews = useSelector(state => state.reviews);
    const reservations = useSelector(state => state.reservations)
    const sessionUser = useSelector(state => state.session.user);

    const userId = sessionUser.id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserReviews(userId));
        dispatch(getUserReservations(userId));
    }, [dispatch, userId]);

    const deleteReview = (id) => {
        dispatch(getDeleteReview(id));
        window.location.assign("/userPage");
    }

    const deleteReservation = (id) => {
        dispatch(getDeleteReservation(id));
        window.location.assign("/userPage");
    }

    const userReviewElement = Object.values(reviews).map(review => {
        return (
            <li key={review.id} className="reviewLi">
                <div>
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>
                </div>
                <button type="button" onClick={() => deleteReview(review.id)}>Delete</button>
            </li>
        );
        });


    const userReservationElement = Object.values(reservations).map(reservation => {
        return (
            <li key={reservation.id} className="reviewLi">
                <div>
                    <h3>{reservation.name}</h3>
                    <p>{reservation.address1}</p>
                    <p>{reservation.date}</p>
                </div>
                <button type="button" onClick={() => deleteReservation(reservation.id)}>Delete</button>
            </li>
        );
    });
    
    return (
        <div className="userParent">
            <div className="user">
                <h1>Welcome {sessionUser.username}</h1>
                <h2>Your Reservations</h2>
                <div>
                    {userReservationElement}
                </div>
                <h2>Your Reviews</h2>
                <div>
                    {userReviewElement}
                </div>
            </div>
        </div>
    )
}

export default UserPage;