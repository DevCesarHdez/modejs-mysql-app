const express = require('express');
const router = express.Router();

const pool = require('../database.js');

router.get('/add', (req, res) => {
  res.render('links/add.hbs');
})

router.post('/add', async (req, res) => {
  const { title, url, description } = req.body
  const newLink = {
    title,
    url,
    description
  }
  //console.log(newLink);
  await pool.query('INSERT INTO links set ?', [newLink]);
  req.flash('success', 'Link saved successfully');
  res.redirect('/links')
});

router.get('/', async (req, res) => {
  const links = await pool.query('SELECT * FROM links');
  //console.log(links);
  res.render('links/list.hbs', { links: links });
})

router.get('/delete/:id', async (req, res) => {
  const {id} = req.params;
  await pool.query('DELETE FROM links WHERE id = ?', [id]);
  req.flash('success', 'link removed successfully');
  res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const link = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
  console.log(link[0]);
  res.render('links/edit.hbs',{link: link[0]});
});

router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { title, url, description} = req.body;
  const updateLink = {
    title,
    url,
    description
  }
  await pool.query('UPDATE links SET ? WHERE id = ?', [updateLink, id]);
  req.flash('success', 'link updated successfully');
  res.redirect('/links');
});

module.exports = router;
