// required
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

// exports router
module.exports = router;
