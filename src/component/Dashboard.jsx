// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import UsersList from "./UsersList";
// // import './style/Dashboard.css'; // Ensure you have your CSS file

// const Dashboard = () => {
//     const { currentUser, signOut } = useAuth(); // Include signOut from context
//     const navigate = useNavigate();
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//         setUsers(storedUsers);
//     }, []);

//     if (!currentUser) return <p>Loading...</p>;

//     const handleLogout = () => {
//         signOut(); // Clear user session
//         navigate("/signin"); // Redirect to login page
//     };

//     return (
//         <div className="dashboard-container">
//             <h2>Dashboard</h2>
//             <p>Welcome, {currentUser.fullName}!</p>
//             <p>Role: {currentUser.role}</p>

//             {currentUser.profilePicture && (
//                 <div className="profile-picture-container">
//                     <img src={currentUser.profilePicture} alt="Profile" />
//                 </div>
//             )}

//             <div className="allowed-menus">
//                 <UsersList />
//                 {/* <p>Allowed Menus:</p> */}
//                 <ul>
//                     {currentUser.role === "admin" ? (
//                         <li>
//                             <button onClick={() => navigate("/admin/users")}>
//                                 Manage Users
//                             </button>
//                         </li>
//                     ) : (
//                         <>
//                             <li>User Menu</li>
//                             <li>
//                                 <button onClick={() => navigate("/settings")}>
//                                     Settings
//                                 </button>
//                             </li>
//                         </>
//                     )}
//                 </ul>
//             </div>

//             <button onClick={handleLogout} className="logout-button">
//                 Logout
//             </button>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style/Dashboard.css";

const Dashboard = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  if (!currentUser) return <p>Loading...</p>;

  const handleLogout = () => {
    signOut();
    navigate("/signin");
  };

  // Reusable menu item component
  const MenuItem = ({ label, onClick }) => (
    <button className="menu-item" onClick={onClick}>
      {label}
    </button>
  );

  const renderMenu = () => {
    switch (currentUser.role) {
      case "admin":
        return (
          <>
            <MenuItem
              label="Manage Users"
              onClick={() => navigate("/admin/users")}
            />
            <MenuItem
              label="Register new User"
              onClick={() => navigate("/admin/add-user-form")}
            />
          </>
        );
      case "doctor":
        return (
          <>
            <MenuItem
              label="View Appointments"
              onClick={() => navigate("/DoctorDashboard")}
            />
            <MenuItem
              label="Patient List"
              onClick={() => navigate("/doctor/patients")}
            />
            <MenuItem
              label="Add Notes"
              onClick={() => navigate("/doctor/notes")}
            />
          </>
        );
      case "patient":
        return (
          <>
            <MenuItem
              label="Book Appointment"
              onClick={() => navigate("/AppointmentBooking")}
            />
            <MenuItem
              label="View Appointments"
              onClick={() => navigate("/DoctorDashboard")}
            />
            <MenuItem
              label="Health Reports"
              onClick={() => navigate("/patient/reports")}
            />
          </>
        );
      default:
        return <p>No menus available for your role.</p>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Welcome, {currentUser.fullName}!</h1>
        <p>Role: {currentUser.role}</p>
        {currentUser.profilePicture && (
          <img
            src={currentUser.profilePicture}
            alt="Profile"
            className="profile-picture"
          />
        )}
      </div>
      <div className="menu-container">{renderMenu()}</div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
