import { useLocation } from "react-router-dom";

function Navbar({ toggleSidebar }) {

  const location = useLocation();

  const getPageTitle = () => {

    if (location.pathname === "/") {
      return "Dashboard";
    }

    if (location.pathname.startsWith("/users")) {
      return "Users";
    }

    if (location.pathname.startsWith("/products")) {
      return "Products";
    }

    if (location.pathname.startsWith("/orders")) {
      return "Orders";
    }

    if (location.pathname.startsWith("/settings")) {
      return "Settings";
    }

    return "Dashboard";
  };

  return (
    <header className="navbar">

      <div className="navbar-left">

        <button
          className="menu-button"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <h2>{getPageTitle()}</h2>

      </div>

      <div className="navbar-right">

        <button className="notification">
          🔔
        </button>

        <div className="profile">

          <div className="avatar">
            A
          </div>

          <div className="profile-info">

            <strong>Admin User</strong>

            <span>
              Administrator
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;