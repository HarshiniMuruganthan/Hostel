import React, { useState } from "react";
import "./Userabout.css";
import Usernavbar from "./Usernavbar";

export default function Userabout() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <Usernavbar onProfileClick={handleProfileClick} />

      {/* Profile Details */}
      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Room No: 101</p>
          <p>Name: Harshini</p>
        </div>
      )}

      {/* About Section */}
      <div id="about-section" className="about-section">
        <div className="about-content">
          <img src="/hostelabout.jpg" alt="About Us" className="about-image" />
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              HostelCare is dedicated to ensuring the best maintenance services for hostels. 
              Our platform provides easy access to maintenance requests and quick solutions. 
              We aim to create a hassle-free experience for students and hostel staff. 
              With dedicated services in carpentry, electrical work, plumbing, housekeeping, 
              and network support, we ensure smooth hostel management. 
              Our team is committed to delivering reliable and efficient services.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <h3>Inhouse Project By Department of Computer Science and Engineering</h3>
        <h3>Contributors:</h3>
        <p>Dharanya S</p>
        <p>Dhiviya Lakshime C</p>
        <p>Harshini M</p>
        <p>
          Email: <a href="mailto:hostelcare@gmail.com">hostelcare@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
