const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
  Employee.find()
    .then(page1 => res.json(page1))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findByName').post((req, res) => {
  
  console.log("in /find req res ..req.body.empName: " + req.body.empName);

  Employee.find({ empName: req.body.empName })
    .then(page1 => {res.json(page1), console.log(res.body);})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findByempID').post((req, res) => {
  
  console.log("in /find req res ..req.body.empID: " + req.body.empID);

  Employee.findOne({ empID: req.body.empID })
    .then(page1 => {console.log(page1.empID);res.json(page1);})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findByFilter').post((req, res) => {
  
  console.log("in /find req res ..req.body.status: " + req.body.filter);

  Employee.find({ status: req.body.filter })
    .then(page1 => {res.json(page1)})
    .catch(err => res.status(400).json('Error in finding filter: ' + err));
});


router.route('/updateStatus/:id').patch((req, res) => {
  Employee.findById(req.params.id)
    .then(page1 => {
      page1.status = req.body.status;
      page1.latitude = req.body.latitude;
      page1.longitude = req.body.longitude;

      page1.save()
        .then(() => res.json('Employee status updated !!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/updateLatLong/:id').patch((req, res) => {
  Employee.findById(req.params.id)
    .then(page1 => {
      page1.latitude = req.body.latitude;
      page1.longitude = req.body.longitude;

      page1.save()
        .then(() => res.json('Employee Lat and Long updated !!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const empID = req.body.empID;
  const empName = req.body.empName;
  const status = req.body.status;
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const phone = req.body.phone;
  const email = req.body.email;

  const newEmployee = new Employee({
    empID,
    empName,
    status,
    latitude,
    longitude,
    phone,
    email,
  });

  newEmployee.save()
  .then(() => res.json('New Employee details added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Employee.findById(req.params.id)
    .then(page1 => res.json(page1))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee details deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;