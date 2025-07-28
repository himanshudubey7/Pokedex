import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromProtected = location.state?.fromProtected;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      navigate("/pokedex");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMsg("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>

      {fromProtected && (
        <p className="login-warning">⚠️ Please log in to access the Favorites page.</p>
      )}

      {errorMsg && <p className="login-error">{errorMsg}</p>}

      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
      Don’t have an account? <a href="/signup" className="signup-link">Sign up</a>
      </p>

    </div>
  );
}

export default Login;
