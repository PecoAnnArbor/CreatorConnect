import { useState } from "react";
import "../css/Dashboard.css";
import Sidebar from "../components/Sidebar";
import Featured from "../components/Featured";
import Projects from "../components/Projects";
import Requests from "../components/Requests";
import Profile from "../components/Profile";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("featured"); // Move state here

  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> {/* Pass state */}
      
      <div className="dashboard-content">
        {activeTab === "featured" && <Featured />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "requests" && <Requests />}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
}

export default Dashboard;
