import { getTrucks } from '../../store/trucks';
import { getUserTrucks } from '../../store/userTrucks';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



function HomePage(){
    const trucks = useSelector(state => state.trucks);
    const userTrucks = useSelector(state => state.userTrucks);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrucks());
        if (sessionUser) {
            dispatch(getUserTrucks(sessionUser.id))
        }
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

    const userTrucksElement = Object.values(userTrucks).map(truck => {
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
            <div>
                {sessionUser && userTrucksElement}
            </div>
            {trucksElement}
        </div>
    );
};

export default HomePage;