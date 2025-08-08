import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Adminnavbar"; // ✅ Import reusable navbar
import "./History.css";

const History = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          "https://hostelcare-qqdm.onrender.com/api/complaints/admin/all"
        );
        const grouped = response.data;

        const transformed = Object.entries(grouped).map(
          ([category, records]) => ({
            category,
            records,
          })
        );
        setHistoryData(transformed);
      } catch (err) {
        console.error("Error fetching admin history:", err);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="home-container">
      <Navbar /> {/* ✅ Reusable Navbar */}

      <div className="history-container">
        <h2 className="history-title">Overall Complaints Report</h2>
        {historyData.map((service, index) => (
          <div key={index} className="history-section">
            <h3 className="service-title">{service.category}</h3>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Room No</th>
                  <th>Problem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {service.records.map((record, idx) => (
                  <tr key={idx}>
                    <td>{record.studentName}</td>
                    <td>{record.roomNumber}</td>
                    <td>{record.complaintText}</td>
                    <td
                      className={`history-status-${record.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {record.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
