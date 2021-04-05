import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLocations } from '../../store/locations';
import { addNewTruck } from '../../store/trucks';

// import './ReservationForm.css';

function CreateTruckPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser.id;
  const locations = useSelector((state) => state.locations);

  const history = useHistory();
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [locationId, setLocationId] = useState(1);
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [foodType, setFoodType] = useState("");
  const [priceRange, setPriceRange] = useState("$");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getLocations());
    }, [dispatch]);

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      dispatch(addNewTruck({name, description, locationId, phone, website, foodType, priceRange, userId}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
      history.push(`/`);
    };

    const menuElement = Object.values(locations).map(location => {
        return (
            <option
            key={location.id}
            value={location.id}
            >
            {location.name}
            </option>
        );
        });

  return (
    <div className='form_parent'>
        <form className='form' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='form_child'>
            Which truck location?
            <select
                onChange={(e) => setLocationId(e.target.value)}
                value={locationId}
            >
                {menuElement}
            </select>
          </label>
          <label className='form_child'>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className='form_child'>
           Description
            <input
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label className='form_child'>
           Phone Number
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className='form_child'>
           Website URL
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <label className='form_child'>
           Type of Food
            <input
              type="text"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            />
          </label>
          <label className='form_child'>
           Price Range
           <select
                onChange={(e) => setPriceRange(e.target.value)}
                value={priceRange}
            >
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>
          </label>
          <button type="submit">Create New Truck</button>
        </form>
        </div>
  );
}

export default CreateTruckPage;