import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./style/Signin.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation(); // Get translation function
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
        <h2>{t("sign_in")}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder={t("username")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder={t("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">
            {t("sign_in")}
          </button>
        </form>
        <p>
          {t("no_account")} <Link to="/signup">{t("sign_up")}</Link>
        </p>
        <p>
          <Link to="/ForgotPassword">{t("forgot_password")}</Link>
        </p>
        <div className="social-login">
          <button className="google-btn">
            <FaGoogle className="icon" /> {t("login_google")}
          </button>
          <button className="github-btn">
            <FaGithub className="icon" /> {t("login_github")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
