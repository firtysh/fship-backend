const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { required: true, type: String },
    password: { required: true, type: String },
    quiz: [
      {
        questions: [
          {
            qid: String,
          },
        ],
        results: [{ userId: String, userName: String, score: Number }],
      },
    ],
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
