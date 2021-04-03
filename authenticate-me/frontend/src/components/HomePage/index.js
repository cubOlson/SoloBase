import { getTrucks } from '../../store/trucks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



function HomePage(){
    const trucks = useSelector(state => state.trucks);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrucks());
    }, [dispatch, sessionUser])

    const trucksElement = Object.values(trucks).map(truck => {
        return (
            <Link to={`/trucks/${truck.id}`} key={truck.id}>
                <div>
                    <h2>{truck.name}</h2>
                    <p>{truck.foodType}</p>
                </div>
            </Link>
        );
        });

    return (
        <div>
            <div>
                <h1>Welcome to StandingRoomOnly!</h1>
                <p>Tracking most food trucks in the Urcity area since 2021</p>
            </div>
            {trucksElement}
        </div>
    );
};

export default HomePage;