const router = require('express').Router();
let Calendar = require('../models/calendar.model');

router.route('/').get((req, res) => {
  Calendar.find()
    .then(page3 => res.json(page3))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  
  console.log("in /find req res ..req.body.empID: " + req.body.empID);

  Calendar.find({ empID: req.body.empID, date: req.body.date  })
    .then(page3 => {res.json(page3), console.log(res.body);})
    .catch(err => res.status(400).json('Error: ' + err));
});

  

router.route('/add').post((req, res) => {
  const empID = req.body.empID;
  const time = req.body.time;
  const date = req.body.date;
  const status = req.body.status;

  const newCalendar = new Calendar({
    empID,
    time,
    date,
    status
  });

  newCalendar.save()
  .then(() => res.json('New status added !!'))
  .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;