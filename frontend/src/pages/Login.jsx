import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";
import API from "../api"; 

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

console.log("LOGIN CLICKED");
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    alert("Login successful 🚀");

    localStorage.setItem("loggedUser", JSON.stringify(res.data.user));
    localStorage.setItem("token", res.data.token);

    navigate("/dashboard");

  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

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