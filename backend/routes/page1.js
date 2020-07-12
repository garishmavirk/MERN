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


router.route('/findByFilter').post((req, res) => {
  
  console.log("in /find req res ..req.body.status: " + req.body.filter);

  Employee.find({ status: req.body.filter })
    .then(page1 => {res.json(page1)})
    .catch(err => res.status(400).json('Error in finding filter: ' + err));
});


router.route('/add').post((req, res) => {
  const empID = req.body.empID;
  const empName = req.body.empName;
  const status = req.body.status;
  const location = req.body.location;
  const phone = req.body.phone;
  const email = req.body.email;

  const newEmployee = new Employee({
    empID,
    empName,
    status,
    location,
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

router.route('/update/:id').post((req, res) => {
  Employee.findById(req.params.id)
    .then(page1 => {
      page1.empID = req.body.empID;
      page1.empName = req.body.empName;
      page1.status = req.body.status;
      page1.location = req.body.location;
      page1.phone = req.body.phone;
      page1.email = req.body.email;

      page1.save()
        .then(() => res.json('Employee details updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;