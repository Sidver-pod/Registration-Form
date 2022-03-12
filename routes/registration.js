const express = require('express');

const registrationController = require('../controllers/registration');

const router = express.Router();

router.get('/', registrationController.getRegistration);

router.post('/', registrationController.postRegistration);

router.post('/delete', registrationController.deleteRegistration);

module.exports = router;
