const express = require('express')
const asyncHandler = require('express-async-handler');

const { Location } = require('../../db/models');

const router = express.Router();

//Grab All Locations
router.get(
    '/',
    asyncHandler( async(req, res, next) => {

        const locations = await Location.findAll();
        return res.json({ locations });
    })
);

//Get location by Id
router.get(
    '/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id)

        const location = await Location.findAll({where:{id}});
        return res.json({ location });
    })
);

module.exports = router;

