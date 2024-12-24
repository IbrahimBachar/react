// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style/AddUserForm.css";

// const AddUserForm = () => {
//   const [user, setUser] = useState({
//     username: "",
//     fullName: "",
//     email: "",
//     dob: "",
//     phoneNumber: "",
//     role: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const newErrors = {};
//     if (!user.username) newErrors.username = "Username is required";
//     if (!user.fullName) newErrors.fullName = "Full Name is required";
//     if (!user.email || !/\S+@\S+\.\S+/.test(user.email))
//       newErrors.email = "Valid Email is required";
//     if (!user.dob) newErrors.dob = "Date of Birth is required";
//     if (!user.phoneNumber || !/^\d{10}$/.test(user.phoneNumber))
//       newErrors.phoneNumber = "Valid Phone Number is required";
//     if (!user.role) newErrors.role = "Role is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const updatedUsers = [...existingUsers, user];
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//     navigate("/admin/users");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const handleCancel = () => {
//     navigate("/admin/users");
//   };

//   return (
//     <div className="add-user-form-container">
//       <h2>Add New User</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
            
//             value={user.username}
//             onChange={handleChange}
//             className={errors.username ? "error" : ""}
//           />
//           <i class="input-icon fa fa-user"></i>
//           {errors.username && <span className="error-text">{errors.username}</span>}
//         </div>

//         <div className="form-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={user.fullName}
//             onChange={handleChange}
//             className={errors.fullName ? "error" : ""}
//           />
//           {errors.fullName && <span className="error-text">{errors.fullName}</span>}
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             className={errors.email ? "error" : ""}
//           />
//           {errors.email && <span className="error-text">{errors.email}</span>}
//         </div>

//         <div className="form-group">
//           <label>Date of Birth</label>
//           <input
//             type="date"
//             name="dob"
//             value={user.dob}
//             onChange={handleChange}
//             className={errors.dob ? "error" : ""}
//           />
//           {errors.dob && <span className="error-text">{errors.dob}</span>}
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={user.phoneNumber}
//             onChange={handleChange}
//             className={errors.phoneNumber ? "error" : ""}
//           />
//           {errors.phoneNumber && (
//             <span className="error-text">{errors.phoneNumber}</span>
//           )}
//         </div>

//         {/* <div className="form-group">
//           <label>Role</label>
//           <input
//             type="text"
//             name="role"
//             value={user.role}
//             onChange={handleChange}
//             className={errors.role ? "error" : ""}
//           />
//           {errors.role && <span className="error-text">{errors.role}</span>}
//         </div> */}
//          <label>
//           Role
//           <select
//             name="role"
//             value={user.role}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Role</option>
//             <option value="Admin">Admin</option>
//             <option value="Doctor">Doctor</option>
//             <option value="Patient">Patient</option>
//           </select>
//         </label>

//         <div className="form-actions">
//           <button type="submit" className="submit-button">
//             Add User
//           </button>
//           <button type="button" onClick={handleCancel} className="cancel-button">
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "./style/Signup.css"; // Link to the CSS file
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const AddUserForm = () => {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "Admin",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.username ||
      !form.fullName ||
      !form.email ||
      !form.dob ||
      !form.phoneNumber ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    signUp(form);
    navigate("/admin/users");
  };

    const handleCancel = () => {
    navigate("/admin/users");
  };

  return (
    <div className="signup-container">
      <div className="form-wrapper">
        <h2>{t("add_user")}</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder={t("username")}
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder={t("full_name")}
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder={t("email")}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="input-group">
            <input
              type="date"
              placeholder={t("dob")}
              value={form.dob}
              onChange={(e) => setForm({ ...form, dob: e.target.value })}
            />
          </div>
          <div className="input-group">
            <FaPhone className="icon" />
            <input
              type="text"
              placeholder={t("telephone")}
              value={form.phoneNumber}
              onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder={t("password")}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder={t("confirm_pwd")}
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
          </div>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="" disabled>{t("select")}</option>
            <option value="admin">{t("admin")}</option>
            <option value="doctor">{t("doctor")}</option>
            <option value="patient">{t("patient")}</option>
          </select>
          <button type="submit" className="btn">
          {t("save")}
          </button>

           <button type="button" onClick={handleCancel} className="cancel-button">
             {t("cancel")}
           </button>
        </form>
        {/* <p>
        {t("have_account")} <Link to="/signin">{t("sign_in")}</Link>
        </p> */}
      </div>
    </div>
  );
};

export default AddUserForm;
