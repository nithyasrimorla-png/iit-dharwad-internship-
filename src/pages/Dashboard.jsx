
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

    useEffect(() => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  console.log(loggedUser); // check browser console

  if (loggedUser) {
    setUserName(loggedUser.name);
  }
}, []);

const handleLogout = () => {
  localStorage.removeItem("loggedUser");
  navigate("/");
};

  return (
    <div className="dashboard">

      <div className="sidebar">
        <h1 className="h1">Retro.</h1>
        <ul>
          <li className="over">🏠Overview</li>
          <li
              className="cor"
              onClick={() => navigate("/chapters")}
            >
          📚 Chapters
          </li>
          <li className="cor"> 🗓️ Schedule</li>
          <li className="cor">  ❤️ Whislist</li>
          <li className="cor"> ⚙️ Settings</li>
          <div className="logout" onClick={handleLogout}>
          👤 <span>Logout</span>
          </div>
        </ul>

        <div className="start">
          <input className="get" placeholder="Get Started" />
          <img src="/images/gift.png" alt="Gift" className="card-imgs" />
          <p>Upgrade to a PRO plan</p>
        </div>
      </div>

      <div className="main">  

 <input type="text" placeholder=" 🔍 Search anything..." className="search-input" />

        <input placeholder="coding" className="code" />
        <input placeholder="Design" className="code" />
        <input placeholder="Marketing" className="code" />
        <input placeholder="Accounting" className="code" />
   <div className="search">
        <h3>Recent Searches</h3>
        <div className="container">

          <div className="feat">
            <span className="featu">Featured</span>
            <img src="/images/draw.jpg" alt="draw" className="card-i"/>
            <div className="daily">Daily Practices Drawing</div>
          </div>

   <div className="feat">
            <span className="featu">New</span>
            <img src="/images/exp.jpg" alt="exp" className="card-i"/>
            <div className="power">The Power</div>
          </div>

     <div className="feat">
            <img src="/images/N.jpg" alt="N" className="card-i" />
            <div className="Expressive">Expressive</div>
          </div>

        </div>
      </div>
        
      

        <div className="search">
        <h3>Popular Class</h3>

        <div className="popular-cards">
          <div className="lunacy">
            <input className="badge" placeholder="Featured" />
             <img src="/images/lunacy.jpg" alt="Lunacy" className="card-img"/>
            <div className="card-body">
              <p>Lunacy Design Class</p>
            </div>
          </div>

          <div className="Digital">
            <input className="badge" placeholder="Featured" />
             <img src="/images/ill.jpg" alt="ill" className="card-img" />

            <div className="card-body">
              <p>Digital Art for Prime</p>
            </div>
          </div>
        </div>
      </div>

    
        <div className="search">
          <h3>Newest Class</h3>

          <div className="container">

            <div className="draw">
              
              <input className="feature" placeholder="New" />
              <img src="/images/pic.jpg" alt="Drawing Basics" className="card-im" />
              <div className="card-foot">
                <p>Drawing Basics</p>
              </div>
            </div>

            <div className="draw">
              
              <input className="feature" placeholder="New" />
              <img src="/images/S.jpg" alt="Creative Sketching" className="card-im" />
              <div className="card-foot">
                <p>Creative Sketching</p>
              </div>
            </div>

            <div className="draw">
              <input className="feature" placeholder="New" />
              <img src="/images/book.jpg" alt="Drawing ilustration" className="card-im" />
              <div className="card-foot">
                <p>Digital Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="right">
       <div className="user-profile">
  <div className="user-avatar">
    {userName.charAt(0).toUpperCase()}
  </div>

  <div>
    <h2 className="user-name">{userName}</h2>
    <p className="user-role">Student</p>
  </div>
</div>
        <i>You are doing great, Keep Practicing</i>

        <h3>Latest Learned</h3>
        <div className="product">
          <span className="bad">Featured</span>
          <img src="/images/tick.jpg" alt="tick" className="product-img" />
            <div className="product-line"></div>
         <p className="product-text">Productivity Master Class</p>
        </div>
    <div className="courses-list">
   <div className="course-card">
  <img src="/images/Adobe.jpg" alt="Adobe" className="course-img" />
   <div className="course-content"></div>
  <p>Adobe Illustrator Training</p>
  <div className="progress">
    <div className="progress-fill"></div>
      </div>
  </div>
</div>

<div className="course-card">
  <img src="/images/textbars.jpg" alt="Textbars" className="course-img" />
   <div className="course-content">
  <p>Hand-Painted Textbars</p>
   <div className="progress">
      <div className="progress-fill"></div>
    </div>
  </div>
</div>

<div className="course-card">
  <img src="/images/album.jpg" alt="Album" className="course-img" />
  <div className="course-content">
  <p>Create a Bold Album Cover</p>
  <div className="progress">
      <div className="progress-fill"></div>
    </div>
  </div>
</div>

<div className="course-card">
  <img src="/images/procreate.jpg" alt="Procreate" className="course-img" />
  <div className="course-content">
  <p>How to Use Procreate 5x</p>
  <div className="progress">
      <div className="progress-fill"></div>
    </div>
  </div>
</div>
  </div>
  </div>
  
  );
}

export default Dashboard; 