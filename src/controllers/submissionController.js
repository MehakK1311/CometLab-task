const axios = require('axios');
const Submission = require('../models/Submission');
const Question = require('../models/Question');

const checkSolution = async (req, res) => {
  try {
    const { questionId, userId, solution } = req.body;

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const response = await axios.post(
      `https://${process.env.SPHERE_ENGINE_ENDPOINT}/api/v4/submissions`,
      {
        access_token: process.env.SPHERE_ENGINE_ACCESS_TOKEN,
        language: 71, // Replace with the appropriate language code
        source_code: solution,
        input: question.testCases[0].input, // Assuming the question has at least one test case
        expected_output: question.testCases[0].output,
      }
    );

    const result = response.data.result;
    let submissionResult;

    if (result === 'wrong') {
      submissionResult = 'wrong';
    } else if (result === 'compilation error' || result === 'runtime error') {
      submissionResult = 'error';
    } else {
      submissionResult = 'success';
    }

    const submission = await Submission.create({
      question: questionId,
      user: userId,
      solution,
      result: submissionResult,
    });

    res.json({ result: submissionResult, error: response.data.stderr || null });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check solution' });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const submissions = await Submission.paginate({}, options);

    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get submissions' });
  }
};

module.exports = {
  checkSolution,
  getSubmissions,
};
