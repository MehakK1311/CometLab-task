const express = require('express');
const { createQuestion, editQuestion, deleteQuestion } = require('../controllers/questionsController');
const { isAdmin } = require('../middlewares/authMiddleware');
const { createQuestionSchema, editQuestionSchema } = require('../validations/questionValidation');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/questions', isAdmin, validationMiddleware(createQuestionSchema), createQuestion);
router.put('/questions/:id', isAdmin, validationMiddleware(editQuestionSchema), editQuestion);
router.delete('/questions/:id', isAdmin, deleteQuestion);

module.exports = router;
