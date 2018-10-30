/**
 * adminRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

// Initializes the data-2.json file with notes as its initial value if empty
const store = new SimpleJsonStore('./items.json', { notes: [] });

router.get('/', function getAdminPage(req, res) {
  let viewModel = req.viewModel;
  viewModel.notes = store.get('notes');
  res.render('admin/admin.pug', viewModel);
});

module.exports = router;
