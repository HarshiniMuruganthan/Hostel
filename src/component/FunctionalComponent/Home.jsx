import { useNavigate } from "react-router-dom";
import "./Home.css";
import UserNavbar from "./Usernavbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <UserNavbar />

      <div className="service-boxes">
        <div
          className="service-box carpentry"
          onClick={() => navigate("/carpentry")}
        >
          <span>Complaints</span>
        </div>
      </div>
    </div>
  );
}
