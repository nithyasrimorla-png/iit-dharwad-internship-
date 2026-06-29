const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ==========================
// GET DASHBOARD DATA
// ==========================
router.get("/dashboard/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      progress: user.progress,
      weeklyData: user.weeklyData,
      streak: user.streak,
      lastChapter: user.lastChapter,
      exerciseCount: user.exerciseCount,
      completedChapters: user.completedChapters,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ==========================
// GET COMPLETED CHAPTERS
// ==========================
router.get("/completed/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      completedChapters: user.completedChapters,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ==========================
// COMPLETE CHAPTER
// ==========================
router.post("/complete", async (req, res) => {
  try {
    const { userId, chapterId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!user.completedChapters.includes(chapterId)) {
      user.completedChapters.push(chapterId);
      await user.save();
    }

    res.json({
      message: "Chapter marked complete",
      completedChapters: user.completedChapters,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ==========================
// SAVE USER PROGRESS
// ==========================
router.post("/saveProgress", async (req, res) => {
  try {
    const {
      userId,
      progress,
      weeklyData,
      lastChapter,
      exerciseCount,
    } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.progress = progress;
    user.weeklyData = weeklyData;
    user.lastChapter = lastChapter;
    user.exerciseCount = exerciseCount;

    await user.save();

    res.json({
      message: "Progress saved successfully",
      user,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;