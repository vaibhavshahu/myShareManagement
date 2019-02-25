const express = require('express');
const app = express();
const brokerageRoutes = express.Router();

// Require brokerage model in our routes module
let Brokerage = require('../models/Brokerage');

// Defined store route
brokerageRoutes.route('/add').post(function (req, res) {
  let brokerage = new Brokerage(req.body);
  brokerage.save()
    .then(brokerage => {
      res.status(200).json({ 'brokerage': 'brokerage in added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
brokerageRoutes.route('/').get(function (req, res) {
  Brokerage.find(function (err, brokerages) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(brokerages);
    }
  });
});

// Defined edit route
brokerageRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Brokerage.findById(id, function (err, brokerage) {
    res.json(brokerage);
  });
});

//  Defined update route
brokerageRoutes.route('/update/:id').post(function (req, res) {
  //console.log(req.body);
  Brokerage.findById(req.body.id, function (err, result) {
    result.set(req.body);
    result.save(function (err, response) {
      res.send(response);
    });
  })  
});

// Defined delete | remove | destroy route
brokerageRoutes.route('/delete/:id').get(function (req, res) {
  Brokerage.findByIdAndRemove({ _id: req.params.id }, function (err, brokerage) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = brokerageRoutes;