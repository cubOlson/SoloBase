const express = require('express')
const asyncHandler = require('express-async-handler');

const { Photo, Truck } = require('../../db/models');

const router = express.Router();

//Grab All Photos Route
router.get(
    '/',
    asyncHandler( async(req, res, next) => {
        
    })
)