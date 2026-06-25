import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import "../App.css";

function Signup() {
  const navigate = useNavigate();


const handleSignup = async () => {
  const name = document.querySelectorAll(".auth-input")[0].value;
  const email = document.querySelectorAll(".auth-input")[1].value;
  const password = document.querySelectorAll(".auth-input")[2].value;

  try {
    await API.post("/auth/register", {
      name,
      email,
      password,
    });

    alert("Signup successful 🚀");
    navigate("/");
  } catch (err) {
    alert(err.response?.data?.message || "Signup failed");
  }
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