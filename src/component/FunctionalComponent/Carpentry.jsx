import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Carpentry.css";

export default function ComplaintForm() {
  const [complaint, setComplaint] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState("");
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const categories = [
    "Carpentry",
    "Electrical",
    "Food",
    "Laundry",
    "Maintenance",
    "Network",
    "Others",
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setUserInfo(storedUser);
    } else {
      alert("You must be logged in to submit a complaint.");
    }
  }, []);

  const handleProfileClick = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || !user._id || !user.name || !user.roomNo) {
      alert("Incomplete user info. Please login again.");
      return;
    }

    if (!category) {
      alert("Please select a category.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", user._id);
    formData.append("studentName", user.name);
    formData.append("roomNumber", user.roomNo);
    formData.append("complaintText", complaint);
    formData.append("category", category);
    if (file) formData.append("image", file);

    try {
      const res = await fetch("https://hostelcare-qqdm.onrender.com/api/complaints/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setComplaint("");
        setCategory("");
        setFile(null);
        setSubmitted(true);
      } else {
        alert(data.message || "Failed to submit complaint.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Error submitting complaint.");
    }
  };

  return (
    <div className="carpentry-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/ourlogo.png" alt="logo" />
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
      </nav>

      {showProfileDetails && userInfo && (
        <div className="profile-details">
          <h3>Login Details</h3>
          <p>Name: {userInfo.name}</p>
          <p>Room No: {userInfo.roomNo}</p>
        </div>
      )}

      {/* Complaint Form */}
      {!submitted ? (
        <div className="carpentry-form">
          <h2 className="carpentry-title">Complaint Form</h2>
          <form onSubmit={handleSubmit}>
            <select
              id="category"
              className="carpentry-dropdown"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                -- Select Category --
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <textarea
              className="carpentry-textarea"
              rows="4"
              placeholder="Describe your complaint..."
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            ></textarea>

            <input
              type="file"
              className="carpentry-file-input"
              onChange={handleFileChange}
              accept="image/*"
            />

            <button type="submit" className="carpentry-button">
              Submit Complaint
            </button>
          </form>
        </div>
      ) : (
        <div className="carpentry-success">
          <h2 className="success-message">Complaint Submitted Successfully!</h2>
        </div>
      )}
    </div>
  );
}
