// import React from "react";
// import { useTranslation } from "react-i18next";

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-switcher">
//       <button onClick={() => changeLanguage("en")}>English</button>
//       <button onClick={() => changeLanguage("fr")}>Français</button>
//     </div>
//   );
// };

// export default LanguageSwitcher;


// import React from "react";
// import { useTranslation } from "react-i18next";
// import "./LanguageSwitcher.css"; // Include styles for the component

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="language-switcher">
//       <button className="language-button" onClick={() => changeLanguage("en")}>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
//           alt="English"
//           className="flag-icon"
//         />
//         English
//       </button>
//       <button className="language-button" onClick={() => changeLanguage("fr")}>
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
//           alt="Français"
//           className="flag-icon"
//         />
//         Français
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;


import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // Include styles for the component

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher-container">
      <div className="language-switcher">
        <button className="language-button" onClick={() => changeLanguage("en")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="English"
            className="flag-icon"
          />
          English
        </button>
        <button className="language-button" onClick={() => changeLanguage("fr")}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
            alt="Français"
            className="flag-icon"
          />
          Français
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
