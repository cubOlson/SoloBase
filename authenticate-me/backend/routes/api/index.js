// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const trucksRouter = require('./trucks.js');

router.use('/trucks', trucksRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);



module.exports = router;