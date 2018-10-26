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

/* app.get('/admin', (req, res) => {
    res.render('admin/admin.pug');
}) */

/* app.get('/admin', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  viewModel.notes = store.get('notes');
  res.render('admin/admin.pug', viewModel);
}); */

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
  
    //notes.push(newNote);
    store.set('notes', notes);
    //res.json(notes);  
    //res.render('admin/additem.pug');
    res.redirect('/additem');
    //alert("Successfully added!");
    // window.location.href = 'additem';
    console.log(`Successfully added`);
  });

/*   app.get('/', function getIndexPage(req, res) {
    let viewModel = req.viewModel;
    // We can extend the viewModel and add new properties
    // e.g. viewModel.appName = 'Cardo';
    //      viewModel.count = 10;
    //      viewModel.choices = ['apple', 'orange', 'grapes'];
    // Read more: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
    viewModel.notes = store.get('notes');
    res.render('index.pug', viewModel);
  }); */

//   app.get('/', (req, res, next) => {
//     console.log('Index page only');
//     next();
//   }, (req, res) => {
//     res.json(store.get('notes'));
//   });

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});

