import { useState } from "react";
import PropTypes from "prop-types";

import "../css/Sidebar.css";
import featuredIcon from "../assets/dashboard_icons/featured_icon.png";
import projectsIcon from "../assets/dashboard_icons/projects_icon.png";
import requestsIcon from "../assets/dashboard_icons/requests_icon.png";
import profileIcon from "../assets/dashboard_icons/profile_icon.png";

function Sidebar({ activeTab, setActiveTab }) { // Receive state as props
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "▶" : "◀"}
      </button>

      {/* Divider Line */}
      <div className="sidebar-divider"></div>

      {/* Sidebar Items */}
      <div className="sidebar-nav">
        <div 
          className={`sidebar-item ${activeTab === "featured" ? "active" : ""}`} 
          onClick={() => setActiveTab("featured")}
        >
          <img className="icon" src={featuredIcon} alt="Featured" />
          {!isCollapsed && <span>Featured</span>}
        </div>

        <div 
          className={`sidebar-item ${activeTab === "projects" ? "active" : ""}`} 
          onClick={() => setActiveTab("projects")}
        >
          <img className="icon" src={projectsIcon} alt="Projects" />
          {!isCollapsed && <span>My Projects</span>}
        </div>

        <div 
          className={`sidebar-item ${activeTab === "requests" ? "active" : ""}`} 
          onClick={() => setActiveTab("requests")}
        >
          <img className="icon" src={requestsIcon} alt="Requests" />
          {!isCollapsed && <span>My Requests</span>}
        </div>

        <div 
          className={`sidebar-item ${activeTab === "profile" ? "active" : ""}`} 
          onClick={() => setActiveTab("profile")}
        >
          <img className="icon" src={profileIcon} alt="Profile" />
          {!isCollapsed && <span>Profile</span>}
        </div>
      </div>
    </div>
  );
}

/* 🔹 Add PropTypes Validation */
Sidebar.propTypes = {
    activeTab: PropTypes.string.isRequired, // Ensures activeTab is a string
    setActiveTab: PropTypes.func.isRequired, // Ensures setActiveTab is a function
  };

export default Sidebar;
