const express = require('express');
const { createTestCase } = require('../controllers/testCaseController');
const { isAdmin } = require('../middlewares/authMiddleware');
const { createTestCaseSchema } = require('../validations/testCaseValidation');
const validationMiddleware = require('../middlewares/validationMiddleware');


const router = express.Router();

router.post('/testcases', isAdmin, validationMiddleware(createTestCaseSchema), createTestCase);

module.exports = router;
