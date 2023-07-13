const express = require('express');
const { createTestCase } = require('../controllers/testCaseController');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/testcases', isAdmin, createTestCase);

module.exports = router;
