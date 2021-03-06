/**
 * notesRouter.js
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./items.json', { notes: [] });

router.get('/', (req, res, next) => {
  //const notes = req.viewModel.notes;
  next();
}, (req, res) => {
  res.json(store.get('notes'));
});

/* router.get('/admin/', (req, res, next) => {
  //const notes = req.viewModel.notes;
  next();
}, (req, res) => {
  res.json(store.get('notes'));
}); */

router.get('/:id', (req, res) => {
  let notes = req.viewModel.notes;
  let note = {};
  note = notes.find(notes => notes.id === req.params.id);
  res.json(note);
});

/* router.post('/', (req, res) => {
  let notes = req.viewModel.notes;
  const newNote = {
    id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
    title: req.body.title,
    description: req.body.description
  };

  notes.push(newNote);

  res.json(notes);
}); */

router.put('/:id', (req, res) => {
  let notes = req.viewModel.notes;
  const id = req.params.id;

  for(let i = 0; i < notes.length; i++) {
    if(notes[i].id === id) {
      // notes[i].title = req.body.title;
      // notes[i].description = req.body.description;
      brand[i].brand =  req.body.brand;
      model[i].model =  req.body.model;
      description[i].description =  req.body.description;
      price[i].price =  req.body.price;
      instock[i].instock =  req.body.instock; 
      break;
    }
  }

  res.json(notes);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const notes = store.get('notes');
  const newNotes = notes.filter(note => Number(note.id) !== Number(id));

  store.set('notes', newNotes);
  res.json(newNotes);
});

module.exports = router;