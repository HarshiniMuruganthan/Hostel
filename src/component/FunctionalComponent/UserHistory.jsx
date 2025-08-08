import React, { useEffect, useState } from "react";
import UserNavbar from "./Usernavbar";
import "./UserHistory.css";

const UserHistory = () => {
  const [userComplaints, setUserComplaints] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) return;

    setUserInfo(user);

    const fetchComplaints = async () => {
      try {
        const res = await fetch(
          `https://hostelcare-qqdm.onrender.com/api/complaints/user/${user._id}/history`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch complaints");
        }

        const data = await res.json();
        setUserComplaints(data);
        console.log(data);
      } catch (error) {
        setError("Error fetching complaints: " + error.message);
        console.error("Error fetching complaints:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="user-history-container">
      <UserNavbar userInfo={userInfo} />

      <div className="history-wrapper">
        <h2>Your Complaint Report</h2>
        {error ? (
          <p>{error}</p>
        ) : userComplaints.length === 0 ? (
          <p>No complaints found.</p>
        ) : (
          <table className="history-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Problem</th>
                <th>Room No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userComplaints.map((c, idx) => (
                <tr key={idx}>
                  <td>{userInfo?.name || "N/A"}</td>
                  <td>{c.category}</td>
                  <td>{c.complaintText}</td>
                  <td>{c.roomNumber}</td>
                  <td>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserHistory;
