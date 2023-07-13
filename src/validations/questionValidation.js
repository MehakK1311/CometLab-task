const Joi = require("joi");

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
