// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ReviewFormPage from "./components/ReviewForm";
import TrucksList from './components/TrucksList';
import TruckPage from './components/TruckPage';
import ReservationFormPage from './components/ReservationForm';
import CreateTruckPage from './components/CreateTruckPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/trucks/:id'>
            <TruckPage />
          </Route>
          <Route path='/review'>
            <ReviewFormPage />
          </Route>
          <Route path='/reservation'>
            <ReservationFormPage />
          </Route>
          <Route path='/createTruck'>
            <CreateTruckPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;