import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export default function Home() {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const handleAboutClick = () => {
    document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();

  return (
    <div className="home-container">
    
      <nav className="navbar">
        <div className="logo"><img src="/ourlogo.png" alt="HostelCare Logo" className="logo-image" /></div>
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
      </nav>

    
      {showProfileDetails && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Room No: 101</p>
          <p>Name: Harshini</p>
        </div>
      )}

      
      <div className="service-boxes">
        <div className="service-box carpentry" onClick={() => navigate("/carpentry")}><span>Complaints</span></div>
        
        
   

      </div>
    </div>
  );
}
