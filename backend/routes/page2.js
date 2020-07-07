const router = require('express').Router();
let Login = require('../models/login.model');

router.route('/').get((req, res) => {
  Login.find()
    .then(page2 => res.json(page2))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  
  console.log("in /find req res ..req.body.empID: " + req.body.empID);

  Login.findOne({ empID: req.body.empID, password: req.body.password })
    .then(page2 => {res.json(page2), console.log(res.body);})
    .catch(err => res.status(400).json('Error: ' + err));
});

  

router.route('/add').post((req, res) => {
  const empID = req.body.empID;
  const password = req.body.password;

  const newLogin = new Login({
    empID,
    password,
  });

  newLogin.save()
  .then(() => res.json('New login id password added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;