const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  qid: { required: true, type: Number },
  question: { required: true, type: String },
  options: [{ oid: Number, option: String }],
  answer: { required: true, type: Number },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
