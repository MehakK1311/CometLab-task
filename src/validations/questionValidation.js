const Joi = require('joi');

// Validation schema for question creation
const createQuestionSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  testCases: Joi.array()
    .items(
      Joi.object({
        input: Joi.string().required(),
        output: Joi.string().required(),
      })
    )
    .required(),
});

// Validation schema for question editing
const editQuestionSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  testCases: Joi.array().items(
    Joi.object({
      input: Joi.string().required(),
      output: Joi.string().required(),
    })
  ),
});

module.exports = {
  createQuestionSchema,
  editQuestionSchema,
};
