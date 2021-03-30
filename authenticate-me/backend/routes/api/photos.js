const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Photo } = require('../../db/models');

const router = express.Router();

const validatePhoto = [
    check('url')
        .exists({ checkFalsey: true })
        .withMessage('Please provide a valid photo link.'),
        handleValidationErrors,
];

//Grab All Photos Route
router.get(
    '/',
    asyncHandler( async(req, res, next) => {

        const allPhotos = await Photo.findAll();
        return res.json({ allPhotos });
    })
);

//Grab Photos By Truck Id
router.get(
    '/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const truckPhotos = await Photo.findAll({where: {truckId: id }});
        return res.json({ truckPhotos });
    })
);

//Grab Menu Photo for Truck
router.get(
    '/:id/menu',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const menuPhoto = await Photo.findAll({where: {truckId: id, isMenu: true }});
        return res.json({ menuPhoto });
    })
);

//Add a Photo
router.post(
    '/:id',
    validatePhoto,
    asyncHandler( async(req, res) => {

        const truckId = Number(req.params.id);
        const { caption, url, isMenu } = req.body;

        const photo = await Photo.create({
            caption,
            url,
            truckId, 
            isMenu
        });

        return res.json({ photo });
    })
);

module.exports = router;