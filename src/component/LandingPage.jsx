import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
// import "./style/LandingPage.css"; // Link to the embedded CSS
import LanguageSwitcher from "../LanguageSwitcher";
import Hero from "./Hero";
import Features from "./Features";

const LandingPage = () => {
  const { t } = useTranslation(); // Hook for translations

  return (
    // <div className="landing">
    //   {/* <div className="overlay">
    //     <div className="language-switcher-container">
    //       <LanguageSwitcher />
    //     </div>
    //     <div className="content">
    //       <h1 className="title">{t("welcome")}</h1>
    //       <p className="tagline">{t("tagline")}</p>
    //       <p className="moving-text">{t("get_started")}</p>
    //       <div className="buttons">
    //         <Link to="/signup" className="btn">
    //           {t("register")}
    //         </Link>
    //         <Link to="/signin" className="btn">
    //           {t("login")}
    //         </Link>
    //       </div>
    //     </div>
    //   </div> */}
    //   <Hero />
    //   {/* <Features /> */}
    // </div>
    <>
    <div className="language-switcher-container">
            <LanguageSwitcher />
          </div>

     <div className="hero-container">
          
          <div className="hero-content">
            <main className="hero-main">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span>{t("line1")}</span>{' '}
                  <span className="blue">{t("line2")}</span>
                </h1>
                <p className="hero-description">
                  {t("description")}
                </p>
                <div className="hero-buttons">
                  <Link to="/signup" className="button primary">
                    {t("get_started")}
                  </Link>
                  <Link to="/signin" className="button secondary">
                    {t("login")}
                  </Link>
                </div>
              </div>
            </main>
          </div>
          <div className="hero-image-container">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Medical professionals in a modern hospital"
            />
          </div>
        </div>
        </>
  );
};

export default LandingPage;
