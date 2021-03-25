const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');

//Are we in production
const isProduction = environment === 'production';
//Initialize the express application
const app = express();
//Morgan logs info about requests and responses
app.use(morgan('dev'));
//Parse cookies from JSON
app.use(cookieParser());
//Parses JSON bodies of requests with Content-Type 'application-json'
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  
  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        //Can't be read by Javascript, adds to any server response
        httpOnly: true,
      },
    })
  );