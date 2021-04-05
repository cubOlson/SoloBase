import { getTrucks } from '../../store/trucks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import './HomePage.css';
import '../../index.css';

function HomePage(){
    const trucks = useSelector(state => state.trucks);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrucks());
    }, [dispatch, sessionUser])

    const trucksElement = Object.values(trucks).map(truck => {
        return (
            <>
                <div className="cheese"></div>
                <Link to={`/trucks/${truck.id}`} key={truck.id} className="patty">
                        <img src="./StockTruck.jpg" alt="stock truck" className="thumbnail" />
                        <div className="words">
                            <h2 className="highlight">{truck.name}</h2>
                            <p>{truck.foodType}</p>
                            <p>{truck.priceRange}</p>
                        </div>
                </Link>
            </>
        );
        });

    return (
        <div className="parent">
            <div className="title">
                <h1>Welcome to StandingRoomOnly!</h1>
            </div>
            <div className="image">
            </div>
            <div className="description">
                <p>Tracking most food trucks in the Urcity area since 2021</p>
            </div>
            <div className="trucks">
                {trucksElement}
            </div>
            <div className="bottom"></div>
        </div>
    );
};

export default HomePage;