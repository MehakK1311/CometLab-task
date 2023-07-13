const express = require('express');
const { signup, login } = require('../controllers/authController');
const { signupSchema, loginSchema } = require('../validations/userValidation');
const validationMiddleware = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/signup', validationMiddleware(signupSchema), signup);
router.post('/login', validationMiddleware(loginSchema), login);

module.exports = router;
