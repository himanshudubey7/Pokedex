import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../Redux/Slices/AuthSlice";
import "./Signup.css";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(signup({ name, email, password }));

    if (response?.payload?.success) {
      alert("Signup successful! Please log in.");
      navigate("/login");
    } else {
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Create Account</button>
      </form>
       <p>
         Already have an account? <a href="/login" className="login-link"> Login</a>
      </p>

    </div>
  );
}

export default Signup;
