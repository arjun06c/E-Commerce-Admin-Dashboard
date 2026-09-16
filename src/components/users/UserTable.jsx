import { Link } from "react-router-dom";

function UserTable({ users, sortUsers }) {

  return (
    <div className="table-container">

      <table className="user-table">

        <thead>
          <tr>

            <th onClick={() => sortUsers("id")}>
              ID ↕
            </th>

            <th onClick={() => sortUsers("firstName")}>
              User ↕
            </th>

            <th>
              Email
            </th>

            <th>
              Phone
            </th>

            <th onClick={() => sortUsers("age")}>
              Age ↕
            </th>

            <th>
              Gender
            </th>

            <th>
              Company
            </th>

            <th>
              Action
            </th>

          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>
                #{user.id}
              </td>

              <td>

                <div className="user-info">

                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="user-avatar"m 
                  />

                  <div>

                    <strong>
                      {user.firstName} {user.lastName}
                    </strong>

                    <span>
                      @{user.username}
                    </span>

                  </div>

                </div>

              </td>

              <td>
                {user.email}
              </td>

              <td>
                {user.phone}
              </td>

              <td>
                {user.age}
              </td>

              <td>
                {user.gender}
              </td>

              <td>
                {user.company?.name}
              </td>

              <td>

                <Link to={`/users/${user.id}`}>
                  View
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default UserTable;