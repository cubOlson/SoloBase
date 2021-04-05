import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneTruck } from '../../store/trucks';
import { useParams, Link } from 'react-router-dom';

import ReviewBox from '../TruckReviews';
import MenuBox from '../MenuPhoto';
import PhotosBox from '../TruckPhotos';

import './TruckPage.css';
import '../../index.css';

function TruckPage () {
    const trucks = useSelector(state => state.trucks);
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneTruck(id));
    }, [dispatch, id]);

    let buttonArray;
    if (sessionUser) {
        buttonArray = (
        <>
            <Link to="/review">
                <button type="button">Leave a Review!</button>
            </Link>
            <Link to="/reservation">
                <button type="button">Request a Truck!</button>
            </Link>
        </>
        ) 
    } else {
        buttonArray = (
        <>
            <Link to="/reservation">
                <button type="button">Request a Truck!</button>
            </Link>
        </>
        )
    }
    
    return (
        <div className="pageDiv">
            <div className="green">
                <div className="yellow">
                    <div className="orange">
                        <img className="img" src="/StockTruck.jpg" alt="truck vector"/>
                    </div>
                </div>
            </div>
            <div className="label">
                <h1>{trucks.name}</h1>
                <p>{trucks.foodType}</p>
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
            <div className="buttons">
                {buttonArray}
            </div>
            <div className="reviewsDiv">
                <ReviewBox />
            </div>
            <div className="photosDiv">
                <MenuBox className="menu"/>
                <PhotosBox className="photos"/>
            </div>

        </div>
        
    )
}

export default TruckPage;