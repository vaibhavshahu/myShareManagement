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
      res.status(200).json({'brokerage': 'brokerage in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
brokerageRoutes.route('/').get(function (req, res) {
    Brokerage.find(function (err, brokerages){
    if(err){
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
  Brokerage.findById(id, function (err, brokerage){
      res.json(brokerage);
  });
});

//  Defined update route
brokerageRoutes.route('/update/:id').post(function (req, res) {
    Brokerage.findById(req.params.id, function(err, next, brokerage) {
    if (!brokerage)
      return next(new Error('Could not load Document'));
    else {
        brokerage.type = req.body.type;
        brokerage.rate = req.body.rate;
        brokerage.start_date = req.body.start_date;
        brokerage.end_date = req.body.end_date;

        brokerage.save().then(brokerage => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
brokerageRoutes.route('/delete/:id').get(function (req, res) {
    Brokerage.findByIdAndRemove({_id: req.params.id}, function(err, brokerage){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = brokerageRoutes;