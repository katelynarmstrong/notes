// required
const router = require("express").Router();
const notes = require("../../db/db.json");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// GET request f
router.get("/notes", (req, res) => {
  //   res.json(notes);
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    res.json(JSON.parse(data));
  });
});

// POST request
router.post("/notes", (req, res) => {
  let newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    let notesDb = JSON.parse(data);
    console.log(data);
    notesDb.push(newNote);
    fs.writeFile("./db/db.json", JSON.stringify(notesDb), function (err) {
      if (err) throw err;
      console.log("note saved");
    });
  });
  res.sendFile(__dirname + notes);
  // res.json(req.body);
});

// DELETE request
router.delete("/notes/:id", (req, res) => {
  //   notes.splice(req.params.id, 1);
  //   res.sendFile(__dirname + notes);
  //   res.json(req.body);
  let clicked = req.params.id;
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    let notesDb = JSON.parse(data);
    let filtered = notesDb.filter((note) => note.id !== clicked);
    fs.writeFile("./db/db.json", JSON.stringify(filtered), function (err) {
      if (err) throw err;
      console.log("note deleted");
    });
    res.sendFile(__dirname + notes);
  });
});

module.exports = router;
