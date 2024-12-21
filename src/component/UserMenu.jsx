import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style/Signin.css";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, signInWithGitHub } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = signIn(username, password);
    if (!user) {
      setError("Invalid credentials");
      return;
    }
    navigate("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      setError("Google Sign-In failed");
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      await signInWithGitHub();
      navigate("/dashboard");
    } catch (err) {
      setError("GitHub Sign-In failed");
    }
  };

  return (
    <div className="signin-container">
      <div className="form-wrapper">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </p>
        <div className="social-login">
          <button className="google-btn" onClick={handleGoogleSignIn}>
            <FaGoogle className="icon" /> Sign in with Google
          </button>
          <button className="github-btn" onClick={handleGitHubSignIn}>
            <FaGithub className="icon" /> Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
