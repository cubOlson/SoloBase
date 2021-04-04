// frontend/src/components/SignupFormPage/index.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addReview } from '../../store/reviews';
import { getTrucks } from '../../store/trucks';

import './ReviewForm.css';

function ReviewFormPage() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  let userId;
  if (sessionUser) {
    userId = sessionUser.id;
  } 
  const trucks = useSelector(state => state.trucks);

  const history = useHistory();
  
  const [truckId, setTruckId] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(5);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getTrucks());
    }, [dispatch]);

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      dispatch(addReview({truckId, userId, title, content, stars}))
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
      <h1>Review Form</h1>
      <p>Please be nice to our truckers</p>
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
            Title
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label className='form_child'>
            Review
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
          <label className='form_child'>
            Rating
            <select
                onChange={(e) => setStars(e.target.value)}
                value={stars}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          </label>
          <button type="submit">Submit Review</button>
        </form>
        </div>
  );
}

export default ReviewFormPage;