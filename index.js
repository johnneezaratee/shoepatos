/**
 * @description
 * Shoepatos
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./items.json', { notes: [] });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'server'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('views/index.pug');
})

app.get('/userreg', (req, res) => {
    res.render('views/userreg.pug');
})

app.get('/admin', (req, res) => {
    res.render('admin/admin.pug');
})

app.get('/additem',(req, res) => {
    res.render('admin/additem.pug');
})

// test karl
app.post('/additem', function getIndexPage(req, res) {
    const notes = store.get('notes');
    notes.push ({
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

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});

