const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  solution: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    enum: ['success', 'error', 'wrong'],
    required: true,
  },
});

module.exports = mongoose.model('Submission', submissionSchema);
