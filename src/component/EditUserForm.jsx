import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/EditUserForm.css"; // Import CSS for styling
import { useTranslation } from "react-i18next";

const EditUserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [user, setUser] = useState({
    username: "",
    fullName: "",
    email: "",
    dob: "",
    idType: "",
    idNumber: "",
    phoneNumber: "",
    role: "",
  });

  useEffect(() => {
    if (location.state && location.state.user) {
      setUser(location.state.user);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.username === user.username ? user : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/admin/users"); // Redirect back to the user list
  };

  return (
    <div className="edit-user-container">
      <h2>{t("edit_user")}</h2>
      <form onSubmit={handleSubmit} className="edit-user-form">
        <label>
          {t("username")} 
          <input
            type="text"
            name="username"
            value={user.username}
            readOnly
            className="readonly-input"
          />
        </label>
        <label>
          {t("full_name")}
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          {t("email")}
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          {t("dob")}
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleInputChange}
          />
        </label>
        
        
        <label>
          {t("telephone")}
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          {t("role")}
          <select
            name="role"
            value={user.role}
            onChange={handleInputChange}
            required
          >
            <option disabled>{t("select")}</option>
            <option value="Admin">{t("admin")}</option>
            <option value="Doctor">{("doctor")}</option>
            <option value="Patient">{t("patient")}</option>
          </select>
        </label>
        <div className="form-actions">
          <button type="submit" className="save-button">
            {t("save_changes")}
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/admin/users")}
          >
            {t("cancel")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserForm;
