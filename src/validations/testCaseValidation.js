const Joi = require('joi');

// Validation schema for test case creation
const createTestCaseSchema = Joi.object({
  question: Joi.string().required(),
  input: Joi.string().required(),
  output: Joi.string().required(),
});

module.exports = {
  createTestCaseSchema,
};
