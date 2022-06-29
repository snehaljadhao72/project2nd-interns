const express = require('express');
const router = express.Router();
const CollegeControllers = require('../Controllers/CollegeControllers.js')
const InternControllers = require('../Controllers/InternController.js')
const validation = require("../validations.js")


router.post('/functionup/colleges',validation.validator1, CollegeControllers.college )

router.post('/functionup/interns',validation.validator2, InternControllers.intern )

router.get('/functionup/collegeDetails', CollegeControllers.getDetails )





module.exports = router
