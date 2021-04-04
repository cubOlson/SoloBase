// frontend/src/components/SignupFormPage/index.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addAReservation } from '../../store/reservations';
import { getTrucks } from '../../store/trucks';

// import './ReservationForm.css';

function ReservationFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  let userId;
  if (sessionUser) {
    userId = sessionUser.id;
  } 
  const trucks = useSelector(state => state.trucks);

  const history = useHistory();
  
  const [truckId, setTruckId] = useState(1);
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [date, setDate] = useState("mm/dd");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getTrucks());
    }, [dispatch]);

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      dispatch(addAReservation({truckId, name, address1, address2, date, email, phone, userId}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
      history.push(`/trucks/${truckId}`);
    };

    const menuElement = Object.values(trucks).map(truck => {
        return (
            <option
            key={truck.id}
            value={truck.id}
            >
            {truck.name}
            </option>
        );
        });

  return (
    <div className='form_parent'>
      <h1>Truck Reservation Form</h1>
      <p>Please provide a valid phone number for event confirmation.</p>
        <form className='form' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className='form_child'>
            Which truck?
            <select
                onChange={(e) => setTruckId(e.target.value)}
                value={truckId}
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
           Address Line 1
            <input
              type="text"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required
            />
          </label>
          <label className='form_child'>
           Address Line 2
            <input
              type="text"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </label>
          <label className='form_child'>
           Enter Desired Date
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label className='form_child'>
           Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className='form_child'>
           Phone Number
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit Request</button>
        </form>
        </div>
  );
}

export default ReservationFormPage;