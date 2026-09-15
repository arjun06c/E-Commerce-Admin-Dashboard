import { useState } from "react";

function Settings() {

  const [name, setName] = useState("Admin User");

  const [email, setEmail] = useState("admin@example.com");

  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(false);


  const handleSave = (event) => {

    event.preventDefault();

    alert("Settings saved successfully.");

  };


  return (
    <div className="settings-page">

      <h1>Settings</h1>

      <p className="settings-subtitle">
        Manage your account and dashboard preferences
      </p>


      <div className="settings-card">

        <h2>Profile Settings</h2>


        <form onSubmit={handleSave}>

          <div className="form-group">

            <label>
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />

          </div>


          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

          </div>


          <div className="setting-option">

            <div>

              <strong>
                Email Notifications
              </strong>

              <p>
                Receive notifications about dashboard activity
              </p>

            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(event) =>
                setNotifications(event.target.checked)
              }
            />

          </div>


          <div className="setting-option">

            <div>

              <strong>
                Dark Mode
              </strong>

              <p>
                Use dark mode for the dashboard
              </p>

            </div>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={(event) =>
                setDarkMode(event.target.checked)
              }
            />

          </div>


          <button
            type="submit"
            className="save-button"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default Settings;