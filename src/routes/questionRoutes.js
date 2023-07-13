const express = require('express');
const { createQuestion, editQuestion, deleteQuestion, getQuestions } = require('../controllers/questionsController');
const { isAdmin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/questions', isAdmin, createQuestion);
router.put('/questions/:id', isAdmin, editQuestion);
router.delete('/questions/:id', isAdmin, deleteQuestion);
router.get('/questions', isAdmin, getQuestions);

module.exports = router;