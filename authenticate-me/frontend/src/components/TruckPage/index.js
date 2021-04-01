import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneTruck } from '../../store/trucks';
import { useParams } from 'react-router-dom';

function TruckPage () {
    const trucks = useSelector(state => state.trucks);
    const { id } = useParams();
    console.log(id)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneTruck(id));
    }, [dispatch]);
    
    return (
        <div className="parent">
            <div className="label">
                <h1>{trucks.name}</h1>
                <h2>{trucks.foodType}</h2>
            </div>
            <img />
            {/* <p>{trucks.name}</p>
            <p>{trucks.description}</p>
            <p>{trucks.phone}</p>
            <p>{trucks.website}</p>
            <p>{trucks.foodType}</p>
            <p>{trucks.priceRange}</p> */}
        </div>
        
    )
}

export default TruckPage;