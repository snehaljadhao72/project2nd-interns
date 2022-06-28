const express = require('express');
const router = express.Router();
const CollegeControllers = require('../controllers/collegeControllers.js')
const InternControllers = require('../controllers/internController.js')


router.post('/functionup/colleges', CollegeControllers.college )

router.post('/functionup/interns', InternControllers.intern )

router.get('/functionup/collegeDetails', CollegeControllers.getInternsByCollege )





module.exports = router
