import { useNavigate, Link } from "react-router-dom";

import "../App.css";

function Signup() {
  const navigate = useNavigate();


 

  const handleSignup = () => {
    const name = document.querySelectorAll(".auth-input")[0].value;
    const email = document.querySelectorAll(".auth-input")[1].value;
    const password = document.querySelectorAll(".auth-input")[2].value;

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("User already exists");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create Account</h1>

        <input className="auth-input" placeholder="Full Name" />
        <input className="auth-input" placeholder="Email" />
        <input className="auth-input" placeholder="Password" type="password" />

        <button className="auth-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="auth-text">
          Already have account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;