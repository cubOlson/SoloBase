const express = require('express')
const asyncHandler = require('express-async-handler');

const { userTruck } = require('../../db/models');

const router = express.Router();

//Grab All User Favorite Trucks
router.get(
    '/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const allFavorites = await userTruck.findAll({where:{userId:id}});
        return res.json({ allFavorites });
    })
);

//Add User Favorite Truck
router.post(
    '/:id',
    asyncHandler( async(req, res) => {

        const userId = Number(req.params.id);
        const { truckId } = req.body;

        console.log('Pre-check')

        const check = await userTruck.findOne({where:{userId,truckId}});
        if (check) {
            return res.json({error: "Food truck already exists"});
        }

        const newFavorite = await userTruck.create({
            userId,
            truckId
        });

        return res.json({ newFavorite });
    })
);

router.delete(
    
)

module.exports = router;