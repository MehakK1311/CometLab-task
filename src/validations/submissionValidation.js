const Joi = require("joi");

const sendSubmissionResponseSchema = Joi.object({
  submissionId: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = {
  sendSubmissionResponseSchema,
};
