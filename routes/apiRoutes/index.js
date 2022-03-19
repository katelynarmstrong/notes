const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');


// GET request for notes stored in json db
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST request for notes stored in json db 
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    
    notes.push(req.body)
    res.sendFile(__dirname + notes); 
    res.json(req.body);
});

// DELETE request for notes 
router.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);

    res.sendFile(__dirname + notes);
    res.json(req.body);
});

module.exports = router; 