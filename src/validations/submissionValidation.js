const Joi = require('joi');

// Validation schema for submission response email
const sendSubmissionResponseSchema = Joi.object({
  submissionId: Joi.string().required(),
  email: Joi.string().email().required(),
});

module.exports = {
  sendSubmissionResponseSchema,
};
