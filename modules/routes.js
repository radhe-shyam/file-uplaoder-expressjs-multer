const router = require('express').Router();
const userRoute = require('./user/user.route');
const fileController = require('./fileController')

router.use('/user', userRoute);
router.use('/upload', fileController);
module.exports = router;