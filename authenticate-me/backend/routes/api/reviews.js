const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Review } = require('../../db/models');

const router = express.Router();

const validateReview = [
    check('title')
        .exists({ checkFalsey: true })
        .withMessage('Please include a title for your review.'),
    check('content')
        .exists({ checkFalsey: true })
        .withMessage('Please include a review.'),
    check('stars')
        .exists({ checkFalsey: true })
        .withMessage('Please rate the truck.'),
    handleValidationErrors,
];

//Grab Reviews by Truck Id
router.get(
    '/truck/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const truckReviews = await Review.findAll({where: {truckId: id }});
        return res.json( truckReviews );
    })
);

//Grab Reviews by User Id
router.get(
    '/user/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const userReviews = await Review.findAll({where: {userId: id }});
        return res.json( userReviews );
    })
);

//Add a review
router.post(
    '/',
    validateReview,
    asyncHandler( async(req, res) => {

        const { truckId, userId, title, content, stars } = req.body;

        const review = await Review.create({
            truckId,
            userId,
            title, 
            content,
            stars
        });

        return res.json( review );
    })
);

//Delete review by id
router.delete(
    '/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const deleteThis = await Review.findByPk(id);
        await deleteThis.destroy();
        return res.send({message: "Successfully deleted."});
    })
)

module.exports = router;