/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

// Initializes the data-2.json file with notes as its initial value if empty
const store = new SimpleJsonStore('./items.json', { notes: [] });

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  viewModel.notes = store.get('notes');
  res.render('views/index.pug', viewModel);
});

router.post('/', function submitNotes(req, res) {
  // Process: Get notes from json -> Add new note -> Save the notes
  let notes = store.get('notes');
  notes.push({
    brand: req.body.brand,
    model: req.body.model,
    description: req.body.description,
    price: req.body.price,
    instock: req.body.instock
  });
  store.set('notes', notes);

  //- It just reload the page on /
  // More on redirection: https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections
  res.redirect('/');
});

module.exports = router;
