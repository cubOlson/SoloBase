const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Reservation } = require('../../db/models');

const router = express.Router();

const validateReservation = [
    check('name')
        .exists({ checkFalsey: true })
        .withMessage('Please provide your name.'),
    check('address1')
        .exists({ checkFalsey: true })
        .withMessage('Please provide an address.'),
    check('date')
        .exists({ checkFalsey: true })
        .withMessage('Please provide a date.'),
    check('phone')
        .exists({ checkFalsey: true })
        .withMessage('Please provide a phone number.'),
        handleValidationErrors,
];

//Grab Reservations by Truck
router.get(
    '/truck/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const truckRes = await Reservation.findAll({where: {truckId: id }});
        return res.json( truckRes );
    })
);

//Grab Reservations by User
router.get(
    '/user/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const userRes = await Reservation.findAll({where: {userId: id }});
        return res.json( userRes );
    })
);

//Add a Reservation
router.post(
    '/:id',
    validateReservation,
    asyncHandler( async(req, res) => {

        const truckId = Number(req.params.id);

        const { 
            name,
            address1,
            address2,
            date,
            email,
            phone,
            userId
         } = req.body;

        const reservation = await Reservation.create({
            truckId,
            name,
            address1,
            address2,
            date,
            email,
            phone,
            userId
        });

        return res.json( reservation );
    })
);

router.delete(
    '/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const deleteThis = await Reservation.findByPk(id);
        await deleteThis.destroy();
        return res.send({message: "Successfully deleted."});
    })
)



module.exports = router;