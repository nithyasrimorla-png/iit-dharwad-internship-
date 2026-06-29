import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import API from "../api"; 

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
console.log("LOGIN CLICKED");
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);

    setMessage("Login Successful!");
    setMessageType("success");

    setTimeout(() => {
      navigate("/setup");
    }, 1500);

  } catch (err) {
    setMessage(err.response?.data?.message || "Login failed");
    setMessageType("error");
  }
};

  return (

  
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>
     {message && (
  <div className={`auth-message ${messageType}`}>
    {message}
  </div>
)}
        <form onSubmit={handleLogin}>
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br /><br />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br /><br />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;