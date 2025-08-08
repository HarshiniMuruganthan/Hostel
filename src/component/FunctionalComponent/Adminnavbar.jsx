import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Adminnavbar.css"; // You can reuse Adminhome.css styles or move them here

export default function Navbar() {
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
          <Link to="/ahome">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/history">Report</Link>
        </div>
        <div className="profile-icon" onClick={handleProfileClick}>
          <FaUserCircle size={40} />
        </div>
      </div>

      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Email: w@gmail.com</p>
          <p>Name: chithra</p>
          <p>Block: A</p>
        </div>
      )}
    </nav>
  );
}
