const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.User.find({})
    .then(allUsers => {
      res.json(allUsers);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/new", (req, res) => {
  db.User.create(req.body)
    .then(newUser => {
      res.send(newUser);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
