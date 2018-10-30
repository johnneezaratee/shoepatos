/**
 * @description
 * Shoepatos
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const indexRouter = require('./server/routers/indexRouter');
const adminRouter = require('./server/routers/adminRouter');
const notesRouter = require('./server/routers/notesRouter');
const port = 3000;
const notes = [];

const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./items.json', { notes: [] });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    req.viewModel = {
      title: 'Card - Note Taking App',
        notes: notes
    };
    next();
  });

app.set('views', path.join(__dirname, 'server'));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/admin', adminRouter);
app.use('/notes', notesRouter);

// app.get('/', (req, res) => {
//     res.render('views/index.pug');
// }) 

app.get('/userreg', (req, res) => {
    res.render('views/userreg.pug');
})

app.get('/checkout', (req, res) => {
    res.render('views/checkout.pug');
})

app.get('/additem',(req, res) => {
    res.render('admin/additem.pug');
})

// test karl
app.post('/additem', function getIndexPage(req, res) {
    const notes = store.get('notes');
    notes.push ({    
      id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
      brand: req.body.brand,
      model: req.body.model,
      description: req.body.description,
      price: req.body.price,
      instock: req.body.instock 
    });  
    store.set('notes', notes);
    res.redirect('/additem');
    console.log(`Successfully added`);
  });

app.get('/edit',(req, res) => {
    res.render('admin/edititem.pug');
})

app.put('/:id', (req, res) => {
  const id = req.params.id;
  const notes = store.get('notes');

  for(let i = 0; i < notes.length; i++) {
    if(notes[i].id === id) {
      notes[i].title = req.body.title;
      notes[i].description = req.body.description;
      break;
    }
  }

  store.set('notes', notes);
  res.redirect('/admin');
  console.log(`Successfully edited`);
});

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});

