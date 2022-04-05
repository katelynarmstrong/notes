// required
const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes.js');

router.use(noteRoutes);

// exports router
module.exports = router;
