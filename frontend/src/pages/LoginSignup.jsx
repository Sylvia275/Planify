import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Eye from "../assets/icons/Eye.svg";
import EyeOff from "../assets/icons/Eye_off.svg";
import { authApi } from "../api/auth";

// Import the CSS
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

  const [passwordError, setPasswordError] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // ... (keep all your handlers exactly the same: handleSignupChange, handleLoginChange, handleSignupSubmit, handleLoginSubmit)

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
    setPasswordError("");
    setErrorMsg("");
    setStatusMsg("");
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setErrorMsg("");
    setStatusMsg("");
  };

  // Keep your handleSignupSubmit and handleLoginSubmit functions unchanged
  // (copy-paste them as they are)

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setStatusMsg("");
    setPasswordError("");

    if (signupData.password !== signupData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await authApi.signup({
        username: signupData.username.trim(),
        email: signupData.email.trim(),
        password: signupData.password,
      });

      const { data: loginResponse } = await authApi.login({
        username: signupData.username.trim(),
        password: signupData.password,
      });

      const token = loginResponse?.result?.token || loginResponse?.token;
      if (!token) throw new Error("No token received after auto-login");

      localStorage.setItem("accessToken", token);

      let username = signupData.username.trim();
      try {
        const meRes = await authApi.me();
        username = meRes?.data?.result?.username || meRes?.data?.username || username;
      } catch (meErr) {
        console.warn("Could not fetch user info after signup:", meErr);
      }

      setStatusMsg(`Sign up successful! Welcome ${username}!`);
      setSignupData({ username: "", email: "", password: "", confirmPassword: "" });

      setTimeout(() => navigate("/home"), 800);
    } catch (err) {
      console.error("Signup or auto-login error:", err);
      setErrorMsg(
        err.response?.data?.message || err.message || "Sign up failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setStatusMsg("");
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
        console.warn("Could not fetch user info (me):", meErr);
      }

      setStatusMsg(`Login successful! Welcome ${username}!`);
      setLoginData({ username: "", password: "" });

      setTimeout(() => navigate("/home"), 800);
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg(
        err.response?.data?.message || err.message || "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`login-signup-container ${isSignUp ? "active" : ""}`} id="container">
      {/* LOGIN FORM */}
      <div className="form-container login-container">
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>

          {statusMsg && <p className="message success">{statusMsg}</p>}
          {errorMsg && <p className="message error">{errorMsg}</p>}

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
              alt="toggle password visibility"
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

          {passwordError && <p className="message error">{passwordError}</p>}
          {errorMsg && <p className="message error">{errorMsg}</p>}
          {statusMsg && <p className="message success">{statusMsg}</p>}

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
              alt="toggle password visibility"
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
              alt="toggle confirm password visibility"
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
  );
};

export default LoginSignup;