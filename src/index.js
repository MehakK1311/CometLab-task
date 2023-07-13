const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const questionRoutes = require("./routes/questionRoutes");
const testCaseRoutes = require("./routes/testCaseRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", questionRoutes);
app.use("/api", testCaseRoutes);
app.use("/api", submissionRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
