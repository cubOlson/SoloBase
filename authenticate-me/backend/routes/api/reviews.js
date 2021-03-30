const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Review } = require('../../db/models');

const router = express.Router();

//Grab Reviews by Truck Id
router.get(
    '/truck/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const truckReviews = await Review.findAll({where: {truckId: id }});
        return res.json({ truckReviews });
    })
);

//Grab Reviews by User Id
router.get(
    '/user/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const userReviews = await Review.findAll({where: {userId: id }});
        return res.json({ userReviews });
    })
);

module.exports = router;