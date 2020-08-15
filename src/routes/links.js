const express = require('express');
const router = express.Router();

const pool = require('../database.js');

router.get('/add', (req, res) => {
  res.render('links/add.hbs');
})

router.post('/add', (req, res) => {
  console.log(req.body);
  res.send('recived')
});

module.exports = router;
