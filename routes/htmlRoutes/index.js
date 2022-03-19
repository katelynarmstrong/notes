// import functions
const path = require('path');
const router = require('express').Router();

// API routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// export router
module.exports = router; 