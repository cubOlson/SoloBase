//FRONT END ENTRY FILE
import React, { useEffect, useRef } from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import { setModalMount } from './store/modal'

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  const dispatch = useDispatch()
  const modalMooringRef = useRef(null);

  useEffect(() => {
    dispatch(setModalMount(modalMooringRef.current))
  }, [dispatch])
  
  return (
      <>
        <App />
        <div ref={modalMooringRef} className='modal'/>
      </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
