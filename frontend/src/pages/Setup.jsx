import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Setup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    className: "",
    subject: "",
    learningStyle: "",
    improvement: "",
    hobby: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
  const { className, subject, learningStyle, improvement, hobby } = form;

  
  if (!className || !subject || !learningStyle || !improvement || !hobby) {
    alert("⚠️ Please fill all details before continuing");
    return;
  }

  localStorage.setItem("userSetup", JSON.stringify(form));
  navigate("/dashboard");
};

  return (
    <div className="setup-page">

      <h1 className="setup-title"> Let’s know you better</h1>
     

      <div className="setup-form">

        {/* CLASS */}
        <label>🎒 Which class are you studying in?</label>
        <select name="className" onChange={handleChange}>
          <option value="">Select Class</option>
          <option>Class 1</option>
          <option>Class 2</option>
          <option>Class 3</option>
          <option>Class 4</option>
          <option>Class 5</option>
          <option>Class 6</option>
          <option>Class 7</option>
          <option>Class 8</option>
          <option>Class 9</option>
          <option>Class 10</option>
        </select>

        {/* SUBJECT */}
        <label>📚 Your favorite subject?</label>
        <select name="subject" onChange={handleChange}>
          <option value="">Select Subject</option>
          <option>Maths</option>
          <option>Science</option>
          <option>English</option>
          <option>Social Studies</option>
          <option>Computer Science</option>
          <option>Telugu</option>
          <option>Hindi</option>
        </select>

        {/* LEARNING STYLE */}
        <label>🧠 How do you like learning?</label>
        <select name="learningStyle" onChange={handleChange}>
          <option value="">Select Option</option>
          <option>Watching Videos</option>
          <option>Reading Books</option>
          <option>Doing Practice Problems</option>
          <option>Drawing & Visual Learning</option>
        </select>

        {/* IMPROVEMENT */}
        <label>🎯 What do you want to improve?</label>
        <select name="improvement" onChange={handleChange}>
          <option value="">Select Option</option>
          <option>Math Marks</option>
          <option>Reading Skills</option>
          <option>Writing Skills</option>
          <option>Focus in Studies</option>
          <option>Exam Preparation</option>
        </select>

        {/* HOBBY */}
        <label>🎨 What do you like in free time?</label>
        <select name="hobby" onChange={handleChange}>
          <option value="">Select Hobby</option>
          <option>Drawing</option>
          <option>Playing Games</option>
          <option>Watching Videos</option>
          <option>Music</option>
          <option>Sports</option>
          <option>Reading Stories</option>
        </select>

        <button className="setup-btn" onClick={handleNext}>
          Continue →
        </button>

      </div>
    </div>
  );
}

export default Setup;