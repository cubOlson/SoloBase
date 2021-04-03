import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reviewsReducer from './reviews';
import sessionReducer from './session';
import trucksReducer from './trucks';
import photosReducer from './photos';
import reservationReducer from './reservations';
import userTrucksReducer from './userTrucks';

const rootReducer = combineReducers({
  session: sessionReducer,
  trucks: trucksReducer,
  reviews: reviewsReducer,
  photos: photosReducer,
  reservations: reservationReducer,
  userTrucks: userTrucksReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;