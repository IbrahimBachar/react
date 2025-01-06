# 24970 Ibrahim Abdraman Bachar

# Project Description
## Technical Description
**This project is a multi-role clinic management system that integrates a ReactJS front-end with a Spring Boot back-end. 
The system provides user authentication (signup and login) and role-based access, enabling functionalities for Admin, Doctor, and Patient.**

### **Frontend:**
**Built with ReactJS for dynamic user experiences.
Role-specific dashboards with CRUD operations for managing clinic-related tasks.
User-friendly forms for signup and login.**

## **Backend:**
**Developed with Spring Boot for secure and scalable operations.
Uses PostgreSQL for database management.
Implements RESTful APIs for seamless communication with the frontend.
Role-based authentication and authorization.**

## Security:
**Passwords hashed before storing in the database using BCrypt library.
CORS policies to allow secure communication between frontend and backend.**

## Business Description
**This system aims to digitize clinic operations, improving efficiency and user satisfaction by:**

## Admins:
**Managing doctors, patients, and appointment schedules.
Tracking clinic operations through a centralized dashboard**.
## Doctors:
**Viewing appointments and managing patient records.
Documenting diagnosis and treatment plans.**
## Patients:
**Booking appointments**

**The platform enhances operational efficiency, reduces paperwork, and provides a better experience for all stakeholders.**

## Guidance on Signing Up and Signing In

### Signup Workflow
**The form collects the following details:
Full Name
Username
Email
Date of Birth
Phone Number
Role (Admin, Doctor, Patient)
Password and Confirm Password.**

### Fill in the Form:
**Enter accurate details in the form fields. Ensure:
The email is valid.
Password and confirm password match.**

### Submit the Form:
**Click the "Sign Up" button to register.
The form sends a POST request to the backend endpoint /api/register.**

### Backend Processing:
**Backend validates the input.
On successful registration, the user details are stored in the database.
A success message is displayed, and the user may be redirected to the login page.**

### Possible Errors:
**Duplicate email or username: “Email/Username already exists.”
Invalid password format: "Password must contain X characters."
Login Workflow**

### Access the Login Page:
**Navigate to the login page (/login route).
The form collects:
Username or Email
Password.**

### Fill in the Login Details:
**Fill the login Form:
Click the "Login" button to authenticate.
A POST request is sent to the backend endpoint /api/login.**

### Backend Authentication:

**Backend verifies the credentials.
If valid:
The user is redirected to the appropriate dashboard (/dashboard/admin, /dashboard/doctor, or /dashboard/patient) based on their role.
If invalid:
An error message is displayed: “Invalid username or password.”**

### Role-Specific Dashboards:
**Admin**: Manage users, schedules, and clinic operations.
**Doctor**: View appointments and patient details.
**Patient**: Book appointments.
