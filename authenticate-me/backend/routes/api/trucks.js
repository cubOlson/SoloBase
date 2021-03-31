const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Truck } = require('../../db/models');

const router = express.Router();

const validateTruck = [
    check('name')
        .exists({ checkFalsey: true })
        .withMessage('Please include a name for your truck.'),
    check('description')
        .exists({ checkFalsey: true })
        .withMessage('Please include a description of your truck.'),
    check('locationId')
        .exists({ checkFalsey: true })
        .withMessage('Please choose your current address.'),
    check('phone')
        .exists({ checkFalsey: true })
        .withMessage('Please provide a phone number.'),
    check('foodType')
        .exists({ checkFalsey: true })
        .withMessage('Tell us what kind of food you make.'),
    check('priceRange')
        .exists({ checkFalsey: true })
        .withMessage('Select a price range.'),
    handleValidationErrors,
];

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


//Add a Truck
router.post(
    '/',
    validateTruck,
    asyncHandler( async(req, res) => {

        const { name, description, locationId, phone, website, foodType, priceRange } = req.body;

        const truck = await Truck.create({
            name,
            description,
            locationId,
            phone,
            website,
            foodType,
            priceRange
        });

        return res.json({ truck });
    })
);

//Delete truck (needs ID passed in TODO)
router.delete(
    '/',
    asyncHandler( async(req, res) => {

        const { id } = req.body;

        const deleteThis = await Truck.findByPk(id);
        await deleteThis.destroy();

        return res.send({ message: "Truck successfully deleted." });
    })
)

module.exports = router;