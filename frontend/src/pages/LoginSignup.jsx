import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../assets/icons/Eye.svg";
import EyeOff from "../assets/icons/Eye_off.svg";
import { authApi } from "../api/auth";

import "../styles/LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [toasts, setToasts] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      addToast("error", "Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await authApi.signup({
        username: signupData.username.trim(),
        email: signupData.email.trim(),
        password: signupData.password,
      });

      setShowSuccessModal(true);
      setSignupData({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      console.error("Signup error:", err);
      addToast(
        "error",
        err.response?.data?.message || err.message || "Sign up failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleModalOk = () => {
    setShowSuccessModal(false);
    setIsSignUp(false);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await authApi.login({
        username: loginData.username.trim(),
        password: loginData.password,
      });

      const token = data?.result?.token || data?.token;
      if (!token) throw new Error("No token received from server");

      localStorage.setItem("accessToken", token);

      let username = loginData.username;
      try {
        const meRes = await authApi.me();
        username = meRes?.data?.result?.username || meRes?.data?.username || username;
      } catch (meErr) {
        console.warn("Could not fetch user info:", meErr);
      }

      addToast("success", `Login successful! Welcome ${username}!`);
      setLoginData({ username: "", password: "" });

      setTimeout(() => navigate("/home"), 800);
    } catch (err) {
      console.error("Login error:", err);
      addToast(
        "error",
        err.response?.data?.message || err.message || "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toast notifications */}
      <div className="toasts">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <h2>Sign Up Successful!</h2>
            <p>You have successfully created an account.<br />Please log in to continue.</p>
            <button onClick={handleModalOk}>OK</button>
          </div>
        </div>
      )}

      <div className={`container ${isSignUp ? "active" : ""}`} id="container">
        {/* LOGIN FORM */}
        <div className="form-container login-container">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              required
              disabled={loading}
            />

            <div className="password-wrapper">
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                disabled={loading}
              />
              <img
                src={showLoginPassword ? EyeOff : Eye}
                alt="toggle password"
                className="eye-icon"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Login"}
            </button>

            <p>
              Don't have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(true); }}>
                Sign up now
              </a>
            </p>
          </form>
        </div>

        {/* SIGN UP FORM */}
        <div className="form-container signup-container">
          <form onSubmit={handleSignupSubmit}>
            <h1>Sign Up</h1>

            <input
              type="text"
              placeholder="Username"
              name="username"
              value={signupData.username}
              onChange={handleSignupChange}
              required
              disabled={loading}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
              disabled={loading}
            />

            <div className="password-wrapper">
              <input
                type={showSignupPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
                disabled={loading}
              />
              <img
                src={showSignupPassword ? EyeOff : Eye}
                alt="toggle password"
                className="eye-icon"
                onClick={() => setShowSignupPassword(!showSignupPassword)}
              />
            </div>

            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                required
                disabled={loading}
              />
              <img
                src={showConfirmPassword ? EyeOff : Eye}
                alt="toggle confirm password"
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Sign Up"}
            </button>

            <p>
              Already have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(false); }}>
                Log in
              </a>
            </p>
          </form>
        </div>

        {/* Sliding Cover */}
        <div className="cover">
          <h2>WELCOME!</h2>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
