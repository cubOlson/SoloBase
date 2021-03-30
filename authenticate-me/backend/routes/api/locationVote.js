const express = require('express')
const asyncHandler = require('express-async-handler');

const { LocationVote } = require('../../db/models');

const router = express.Router();

//Grab locationVotes by Truck Id
router.get(
    '/:id',
    asyncHandler( async(req, res, next) => {

        const id = Number(req.params.id);

        const votes = await LocationVote.findAll({where:{truckId:id}});
        return res.json({ votes });
    })
);

//Add a Vote - only one vote per user per truck
router.post(
    '/:id',
    asyncHandler( async(req, res) => {

        const truckId = Number(req.params.id);
        const { userId, locationId } = req.body;

        const check = await LocationVote.findOne({where:{truckId, userId}});
        if (check) {
            check.destroy();
        }

        const vote = await LocationVote.create({
           truckId,
           locationId,
           userId
        });

        return res.json({ vote });
    })
);

module.exports = router;