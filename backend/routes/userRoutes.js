const express = require("express");
const User = require("../models/User");

const router = express.Router();


// GET completed chapters
router.get("/progress/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      completedChapters: user.completedChapters || []
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// COMPLETE chapter
router.post("/completeChapter", async (req, res) => {
  try {
    const { userId, chapterId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.completedChapters.includes(chapterId)) {
      user.completedChapters.push(chapterId);
      await user.save();
    }

    res.json({
      message: "Chapter Completed",
      completedChapters: user.completedChapters,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;