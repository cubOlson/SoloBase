import { getTrucks } from '../../store/trucks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



function HomePage(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrucks());
    }, [dispatch])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;