import {
  FaCheckCircle,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">

        {/* Left Section: Brand Logo */}
        <div className="navbar-brand">
          <div className="brand-icon-wrapper">
            <FaCheckCircle className="brand-icon" />
          </div>
          <div>
            <h1 className="brand-title">TaskFlow</h1>
            <p className="brand-subtitle">Organize your work efficiently 🚀</p>
          </div>
        </div>

        {/* Right Section: Profile & Logout */}
        <div className="navbar-actions">
          <div className="user-profile-card">
            <FaUserCircle className="user-avatar" />
            <div className="user-info">
              <h3 className="user-name">{user?.name || "Guest"}</h3>
              <p className="user-email">{user?.email || "guest@example.com"}</p>
            </div>
          </div>

          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;