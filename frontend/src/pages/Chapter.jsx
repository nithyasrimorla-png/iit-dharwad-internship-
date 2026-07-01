import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "./chapter.css";
import API from "../api";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
function Chapter() {
  const navigate = useNavigate();

const [lastChapter, setLastChapter] = useState(1);
const [exerciseCount, setExerciseCount] = useState(0);

const openChapter = (chapterId) => {
  handleChapterWatch(chapterId);
  navigate(`/chapter/${chapterId}`);
};

  const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true }
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { display: false } }
  }
};
  const getToday = () => {
    return ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date().getDay()];
  };

  const [streak, setStreak] = useState(0);

  const [progress, setProgress] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  const [weeklyData, setWeeklyData] = useState({
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0
  });

  const [started, setStarted] = useState(false);

  const chapters = [1, 2, 3, 4, 5];

  useEffect(() => {
  fetch("http://localhost:5000")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
    });
}, []);
 
const [completedChapters, setCompletedChapters] = useState([]);

useEffect(() => {
  const fetchCompletedChapters = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loggedUser"));

      const res = await API.get(`/progress/${user._id}`);

      setCompletedChapters(res.data.completedChapters);

    } catch (err) {
      console.log(err);
    }
  };

  fetchCompletedChapters();
}, []);


const completeChapter = async (chapterId) => {
  try {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    const res = await API.post("/progress/complete", {
      userId: user._id,
      chapterId,
    });

    setCompletedChapters(res.data.completedChapters);

  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  const fetchDashboard = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("loggedUser"));

      const res = await API.get(`/progress/dashboard/${user._id}`);

      setProgress(res.data.progress);
      setWeeklyData(res.data.weeklyData);
      setStreak(res.data.streak);
      setCompletedChapters(res.data.completedChapters);
      setLastChapter(res.data.lastChapter);
      setExerciseCount(res.data.exerciseCount);
    } catch (err) {
      console.log(err);
    }
  };

  fetchDashboard();
}, []);
  
const handleChapterWatch = async (chapterId) => {
  const today = getToday();

  const updatedWeekly = {
    ...weeklyData,
    [today]: Math.min(100, (weeklyData[today] || 0) + 10),
  };

  const updatedProgress = {
    ...progress,
    [chapterId]: Math.min(100, (progress[chapterId] || 0) + 20),
  };

  setWeeklyData(updatedWeekly);
  setProgress(updatedProgress);
  setLastChapter(chapterId);
  
  try {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    await API.post("/progress/saveProgress", {
      userId: user._id,
      progress: updatedProgress,
      weeklyData: updatedWeekly,
      lastChapter: chapterId,
      exerciseCount,
    });

  } catch (err) {
    console.log(err);
  }
};


  const graphData = {
    labels: Object.keys(weeklyData),
    datasets: [
      {
        label: "Performance",
        data: Object.values(weeklyData),
        backgroundColor: "rgba(255,165,0,0.6)"
      }
    ]
  };


const mastery =
  Math.round(
    Object.values(progress).reduce((a, b) => a + b, 0) /
      Object.keys(progress).length
  );


const confidence = Math.min(streak * 10, 100);


const exercise = Math.min(exerciseCount * 10, 100);

  return (
    <div className="chapter-page">

    
      <div className="sidebar">
        <h1 className="h1">EBuddy.</h1>

        <ul>
          <li className="over" onClick={() => navigate("/dashboard")}>
            🏠Overview
          </li>
          <li className="cor" onClick={() => navigate("/chapters")}>📚 Chapters</li>
          <li className="cor">🗓️ Schedule</li>
          <li className="cor">❤️ Wishlist</li>
          <li className="cor">⚙️ Settings</li>

          <div className="logout" onClick={() => navigate("/")}>
            👤 <span>Logout</span>
          </div>
        </ul>

        <div className="start">
          <input className="get" placeholder="Get Started" />
          <img src="/images/gift.png" alt="Gift" className="card-imgs" />
          <p>Upgrade to a PRO plan</p>
        </div>
      </div>

    
      <div className="chapter-main">

        <img src="/images/top-banner.jpg" className="chapter-top-image" />
        <div className="map-section">
  <img src="/images/Map.jpg" alt="Map" className="map-image" />
<div className="chapter-node">
  <button
    className="map-btn map-btn1"
    onClick={() => openChapter(1)}
  />

  {completedChapters.includes(1) && (
    <div className="completed-badge">
      ✓
    </div>
  )}

</div>
 <div className="chapter-node">

  <button
    className="map-btn map-btn2"
    onClick={() => openChapter(2)}
  />

  {completedChapters.includes(2) && (
    <div className="completed-badge">
      ✓
    </div>
  )}

</div>

 <div className="chapter-node">

  <button
    className="map-btn map-btn3"
    onClick={() => openChapter(3)}
  />

  {completedChapters.includes(3) && (
    <div className="completed-badge">
      ✓
    </div>
  )}

</div>

 <div className="chapter-node">

  <button
    className="map-btn map-btn4"
    onClick={() => openChapter(4)}
  />

  {completedChapters.includes(4) && (
    <div className="completed-badge">
      ✓
    </div>
  )}

</div>

<div className="chapter-node">

  <button
    className="map-btn map-btn5"
    onClick={() => openChapter(5)}
  />

  {completedChapters.includes(5) && (
    <div className="completed-badge">
      ✓
    </div>
  )}
  </div>
  </div>

  

        <div className="banner-text">
          Continue where you left off.
        </div>


      <div className="stats-circles">

  <div className="circle-box">
    <CircularProgressbar
      value={mastery}
      text={`${mastery}%`}
      styles={buildStyles({
        pathColor: "#ff9800",
        textColor: "#fff"
      })}
    />
    <p>Mastery</p>
  </div>

  <div className="circle-box">
    <CircularProgressbar
      value={confidence}
      text={`${confidence}%`}
      styles={buildStyles({
        pathColor: "#5f769f",
        textColor: "#fff"
      })}
    />
    <p>Confidence</p>
  </div>

  <div className="circle-box">
    <CircularProgressbar
      value={exercise}
      text={`${exercise}%`}
      styles={buildStyles({
        pathColor: "#2196f3",
        textColor: "#fff"
      })}
    />
    <p>Exercise</p>
  </div>

   </div>
      
        <button
          className="start-btn"
          onClick={() => setStarted(true)}
        >
          Start
          </button>


<div className="right-panel">

  <div className="mega-card">

    
    <div className="mini-card continue-card">
      <h3>▶ Continue Watching</h3>

      <p>Chapter {lastChapter}</p>

      <div className="video-progress">
        <div
          className="video-progress-fill"
          style={{
            width: `${progress[lastChapter] || 0}%`
          }}
        />
      </div>

      <span className="progress-text">
        {progress[lastChapter] || 0}% Completed
      </span>

 <button onClick={() => window.location.href = "https://ema.iitdh.ac.in/ebuddy/"}>
  Continue Learning
</button>
    </div> 

  
    <div className="mini-card">
      <h3>🔥 Streak</h3>
      <h1>{streak} Days</h1>
      <p>Keep learning daily</p>
    </div>

    
    <div className="mini-card">
      <h3> Weekly Performance</h3>
      <Bar data={graphData} options={options} />
    </div>

  </div>
  </div>
  </div>
      </div>
  
  );
}

export default Chapter;