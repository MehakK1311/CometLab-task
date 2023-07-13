const Question = require("../models/Question");

const createQuestion = async (req, res) => {
  try {
    const { title, description, testCases } = req.body;

    const question = await Question.create({ title, description, testCases });

    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: "Failed to create question" });
  }
};

const editQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, testCases } = req.body;

    const question = await Question.findByIdAndUpdate(
      id,
      { title, description, testCases },
      { new: true }
    );

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ error: "Failed to edit question" });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findByIdAndDelete(id);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete question" });
  }
};

const getQuestions = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const questions = await Question.paginate({}, options);

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to get questions" });
  }
};

module.exports = {
  createQuestion,
  editQuestion,
  deleteQuestion,
  getQuestions,
};
