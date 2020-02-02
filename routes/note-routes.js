const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Note.find()
    .then(dbNotes => {
      res.json(dbNotes);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/new", (req, res) => {
  db.Note.create({
    title: req.body.title,
    body: req.body.body
  })
    .then(dbNote => {
      db.User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { notes: dbNote._id } }
      ).then(user => {
        res.send(user);
      });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
