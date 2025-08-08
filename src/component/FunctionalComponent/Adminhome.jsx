import { useNavigate } from "react-router-dom";
import Navbar from "./Adminnavbar";
import "./Adminhome.css";

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="service-boxes">
        <div
          className="service-box carpentry"
          onClick={() => navigate("/complaintcarpentry")}
        >
          <span>Complaints</span>
        </div>
      </div>
    </div>
  );
}
