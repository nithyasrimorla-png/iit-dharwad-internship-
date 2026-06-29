const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Course = require("./models/Course");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const courses = [
  // Class 1
  { title: "English", className: "Class 1", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 1", category: "Subject", image: "/images/maths.jpg", featured: true },

  // Class 2
  { title: "English", className: "Class 2", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 2", category: "Subject", image: "/images/maths.jpg", featured: true },

  // Class 3
  { title: "English", className: "Class 3", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 3", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 3", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 3", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 3", category: "Subject", image: "/images/pe.jpg", featured: false },

  // Class 4
  { title: "English", className: "Class 4", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 4", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 4", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 4", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 4", category: "Subject", image: "/images/pe.jpg", featured: false },

  // Class 5
  { title: "English", className: "Class 5", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 5", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 5", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 5", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 5", category: "Subject", image: "/images/pe.jpg", featured: false },

  // Class 6
  { title: "English", className: "Class 6", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 6", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 6", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 6", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 6", category: "Subject", image: "/images/pe.jpg", featured: false },

  // Class 7
  { title: "English", className: "Class 7", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 7", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 7", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 7", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 7", category: "Subject", image: "/images/pe.jpg", featured: false },
  { title: "Vocational Education", className: "Class 7", category: "Subject", image: "/images/vocational.jpg", featured: false },
  { title: "Social", className: "Class 7", category: "Subject", image: "/images/social.jpg", featured: false },

  // Class 8
  { title: "English", className: "Class 8", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 8", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 8", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 8", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 8", category: "Subject", image: "/images/pe.jpg", featured: false },
  { title: "Vocational Education", className: "Class 8", category: "Subject", image: "/images/vocational.jpg", featured: false },
  { title: "Social", className: "Class 8", category: "Subject", image: "/images/social.jpg", featured: false },

  // Class 9
  { title: "English", className: "Class 9", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 9", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 9", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 9", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 9", category: "Subject", image: "/images/pe.jpg", featured: false },
  { title: "Skill Education", className: "Class 9", category: "Subject", image: "/images/skill.jpg", featured: false },

  // Class 10
  { title: "English", className: "Class 10", category: "Subject", image: "/images/english.jpg", featured: true },
  { title: "Maths", className: "Class 10", category: "Subject", image: "/images/maths.jpg", featured: true },
  { title: "Arts", className: "Class 10", category: "Subject", image: "/images/arts.jpg", featured: false },
  { title: "Science", className: "Class 10", category: "Subject", image: "/images/science.jpg", featured: false },
  { title: "Physical Education", className: "Class 10", category: "Subject", image: "/images/pe.jpg", featured: false }
];

const importData = async () => {
  try {
    await Course.deleteMany(); // Clears old courses
    await Course.insertMany(courses);

    console.log(" Courses inserted successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();