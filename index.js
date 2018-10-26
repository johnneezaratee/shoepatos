/**
 * @description
 * Shoepatos
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

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
//app.use('/', indexRouter);

app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
