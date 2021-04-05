import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrucks } from '../../store/trucks';

import './TrucksList.css';
import '../../index.css';

function TrucksList () {
    const trucks = useSelector(state => state.trucks)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTrucks());
    }, [dispatch]);

    const trucksElement = Object.values(trucks).map(truck => {
        return (
            <li key={truck.id}>
                <div className="image">
                    <img src="./StockTruck.jpg" />
                </div>
                <div className="words">
                    <h2>{truck.name}</h2>
                    <p>{truck.description}</p>
                </div>
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