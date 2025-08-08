import React from "react";
import "./About.css";
import Navbar from "./Adminnavbar";

export default function About() {
  return (
    <div className="home-container">
      <Navbar />

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

      <div className="footer">
        <h3>Inhouse Project By Department of Computer Science and Engineering </h3>
        <h3>Contributers:</h3>
        <p>Dharanya S</p>
        <p>Dhiviya Lakshime C</p>
        <p>Harshini M</p>
        <p>Email:<a href="mailto:hostelcare@gmail.com">hostelcare@gmail.com</a></p>
      </div>
    </div>
  );
}
