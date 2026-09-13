import { NavLink } from "react-router-dom";
import React from "react";
function Sidebar() {

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>AdminPro</h2>
        <span>Dashboard</span>
      </div>

      <nav className="sidebar-menu">

        <NavLink to="/">
          <span>📊</span>
          Dashboard
        </NavLink>

        <NavLink to="/users">
          <span>👥</span>
          Users
        </NavLink>

        <NavLink to="/products">
          <span>📦</span>
          Products
        </NavLink>

        <NavLink to="/orders">
          <span>🛒</span>
          Orders
        </NavLink>

        <NavLink to="/settings">
          <span>⚙️</span>
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;