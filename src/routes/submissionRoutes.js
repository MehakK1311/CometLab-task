const express = require('express');
const { getSubmissions } = require('../controllers/submissionController');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/submissions', isAdmin, getSubmissions);

module.exports = router;