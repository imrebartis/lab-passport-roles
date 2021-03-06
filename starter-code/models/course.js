/*jshint esversion: 6*/
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const courseSchema = new Schema({
  title: String,
  content: String,
  students: Array
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
