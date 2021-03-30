// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const trucksRouter = require('./trucks.js');
const photosRouter = require('./photos.js');
const reviewsRouter = require('./reviews.js');
const locationsRouter = require('./locations.js');
const locationVotesRouter = require('./locationVote.js');

router.use('/locationVotes', locationVotesRouter)

router.use('/locations', locationsRouter)

router.use('/reviews', reviewsRouter);

router.use('/photos', photosRouter);

router.use('/trucks', trucksRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);



module.exports = router;