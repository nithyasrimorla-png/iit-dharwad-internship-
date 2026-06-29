import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import API from "../api";
import "../App.css";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
const handleSignup = async () => {
  try {
    await API.post("/auth/register", {
      name,
      email,
      password,
    });

    setMessage(" Account created successfully!");
    setMessageType("success");

    setTimeout(() => {
      navigate("/");
    }, 1500);

  } catch (err) {
    setMessage(err.response?.data?.message || "Signup failed");
    setMessageType("error");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create Account</h1>

        <input
        className="auth-input"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="auth-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
          {message && (
            <div className={`auth-message ${messageType}`}>
              {message}
            </div>
          )}

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