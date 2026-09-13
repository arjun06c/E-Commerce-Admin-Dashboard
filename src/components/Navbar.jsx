function Navbar() {

  return (
    <header className="navbar">

      <div className="navbar-left">

        <button className="menu-button">
          ☰
        </button>

        <h2>Dashboard</h2>

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