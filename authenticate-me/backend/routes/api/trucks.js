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

//Grab Truck by Id
router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {

        const id = Number(req.params.id);

        const truck = await Truck.findAll({where:{id}});
        res.json({ truck });
    })
);

module.exports = router;