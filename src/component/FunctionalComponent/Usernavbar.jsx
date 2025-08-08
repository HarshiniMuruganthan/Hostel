// src/components/UserNavbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./UserNavbar.css";

export default function UserNavbar() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/ourlogo.png" alt="HostelCare Logo" className="logo-image" />
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/userabout">About</Link>
          <Link to="/userhistory">History</Link>
        </div>
        <div className="profile-icon" onClick={handleProfileClick}>
          <FaUserCircle size={40} />
        </div>
      </div>

      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Room No: 101</p>
          <p>Name: Harshini</p>
        </div>
      )}
    </nav>
  );
}
