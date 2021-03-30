const express = require('express')
const asyncHandler = require('express-async-handler');

const { Truck } = require('../../db/models');

const router = express.Router();

//Grab All Trucks Route
router.get(
    '/',
    asyncHandler(async (req, res, next) => {

        const trucks = await Truck.findAll();
        res.json({ trucks });
    })
);

module.exports = router;