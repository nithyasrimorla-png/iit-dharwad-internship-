const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Get courses (all or by class)
router.get("/", async (req, res) => {
  try {
    const { class: className } = req.query;

    let courses;

    if (className) {
      courses = await Course.find({ className });
    } else {
      courses = await Course.find();
    }

    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add course
router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;