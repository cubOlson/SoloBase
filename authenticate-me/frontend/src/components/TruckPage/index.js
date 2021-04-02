import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneTruck } from '../../store/trucks';
import { useParams, Link } from 'react-router-dom';

import ReviewBox from '../TruckReviews';
import MenuBox from '../MenuPhoto';
import PhotosBox from '../TruckPhotos';

import './TruckPage.css';

function TruckPage () {
    const trucks = useSelector(state => state.trucks);
    const sessionUser = useSelector(state => state.user);
    console.log("user:", sessionUser)
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneTruck(id));
    }, [dispatch, id]);

    let reviewButton;
    if (sessionUser) {
        reviewButton = (
        <li>
            <Link to="/review">
                <button type="button">Leave a Review!</button>
            </Link>
        </li>
        ) 
    } else {
        reviewButton = (
            <div>Nothing Here</div>
        )
    }
    
    return (
        <div className="pageDiv">
            <div className="truckImageDiv">
                <img className="img" src="/TruckVector.png" alt="truck vector"/>
                <div className="label">
                    <h1>{trucks.name}</h1>
                    <p>{trucks.foodType}</p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="descriptionDiv">
                    <p>{trucks.description}</p>
                </div>
                <div className="contactDiv">
                    <p>Phone: {trucks.phone}</p>
                    <p>Price Range: {trucks.priceRange}</p>
                    <a href={trucks.website}>Website</a>
                </div>
            </div>
            {reviewButton}
            <div className="photosDiv">
                <MenuBox />
                <PhotosBox />
            </div>
            <div className="reviewsDiv">
                <ReviewBox />
            </div>
        </div>
        
    )
}

export default TruckPage;