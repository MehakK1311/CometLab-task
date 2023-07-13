const TestCase = require('../models/TestCase');

const createTestCase = async (req, res) => {
  try {
    const { questionId, input, output } = req.body;

    const testCase = await TestCase.create({ question: questionId, input, output });

    res.status(201).json(testCase);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create test case' });
  }
};

module.exports = {
  createTestCase,
};
