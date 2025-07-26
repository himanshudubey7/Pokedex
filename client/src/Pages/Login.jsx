import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

import "./Login.css"; // Link to external CSS

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  async function onLogin(event) {
    event.preventDefault();

    if (!loginData.email || !loginData.password) {
      toast.error("Please fill all the details");
      return;
    }

    const response = await dispatch(login(loginData));
    if (response?.payload?.success) navigate("/");

    setLoginData({ email: "", password: "" });
  }

  return (
    <HomeLayout>
      <div className="login-container">
        <form onSubmit={onLogin} className="login-form">
          <h1 className="login-title">Login Page</h1>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleUserInput}
              value={loginData.email}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleUserInput}
              value={loginData.password}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <p className="login-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="login-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
