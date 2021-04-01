import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrucks } from '../../store/trucks';

function TrucksList () {
    const trucks = useSelector(state => state.trucks)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrucks());
    }, [dispatch]);

    const trucksElement = Object.values(trucks).map(truck => {
        return (
            <li key={truck.id}>
                <h2>{truck.name}</h2>
                <p>{truck.description}</p>
            </li>
        );
        });

    return (
        <ul>
            {trucksElement}
        </ul>
    )
}

export default TrucksList;