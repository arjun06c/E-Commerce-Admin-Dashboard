import { NavLink } from "react-router-dom";

function Sidebar({
  sidebarOpen,
  closeSidebar
}) {

  return (
    <aside
      className={`sidebar ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >

      <div className="logo">

        <div className="logo-header">

          <div>
            <h2>Ecommerce</h2>

            <span>Dashboard</span>
          </div>

          <button
            className="close-sidebar"
            onClick={closeSidebar}
          >
            ✕
          </button>

        </div>

      </div>


      <nav className="sidebar-menu">

        <NavLink
          to="/"
          onClick={closeSidebar}
        >
          <span>📊</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          onClick={closeSidebar}
        >
          <span>👥</span>
          Users
        </NavLink>

        <NavLink
          to="/products"
          onClick={closeSidebar}
        >
          <span>📦</span>
          Products
        </NavLink>

        <NavLink
          to="/orders"
          onClick={closeSidebar}
        >
          <span>🛒</span>
          Orders
        </NavLink>

        <NavLink
          to="/settings"
          onClick={closeSidebar}
        >
          <span>⚙️</span>
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;