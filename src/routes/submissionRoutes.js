const express = require("express");
const {
  getSubmissions,
  sendSubmissionResponse,
} = require("../controllers/submissionController");
const { isAdmin } = require("../middlewares/authMiddleware");
const {
  sendSubmissionResponseSchema,
} = require("../validations/submissionValidation");
const validationMiddleware = require("../middlewares/validationMiddleware");

const router = express.Router();

router.get("/submissions", isAdmin, getSubmissions);
router.post(
  "/submissions/response",
  isAdmin,
  validationMiddleware(sendSubmissionResponseSchema),
  (req, res) => {
    sendSubmissionResponse(req, res);
  }
);

module.exports = router;
