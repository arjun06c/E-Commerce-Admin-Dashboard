import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function UserDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchUser();

  }, [id]);

  const fetchUser = async () => {

    try {

      setLoading(true);

      const response = await api.get(`/users/${id}`);

      setUser(response.data);

    } catch (error) {

      setError("Unable to load user details.");

    } finally {

      setLoading(false);

    }

  };

  if (loading) {
    return <h2>Loading user details...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>

      <button
        onClick={() => navigate("/users")}
        style ={{ marginBottom: "20px" , padding: "10px 20px", border: "none", borderRadius: "7px", background: "#2563eb", color: "white", fontWeight: "600" }}
      >
        ← Back to Users
      </button>

      <h1>User Details</h1>

      <div>

        <img
          src={user.image}
          alt={user.firstName}
        />

        <h2>
          {user.firstName} {user.lastName}
        </h2>

        <p>
          Username: @{user.username}
        </p>

        <p>
          Email: {user.email}
        </p>

        <p>
          Phone: {user.phone}
        </p>

        <p>
          Age: {user.age}
        </p>

        <p>
          Gender: {user.gender}
        </p>

        <p>
          Blood Group: {user.bloodGroup}
        </p>

        <p>
          Company: {user.company?.name}
        </p>

        <p>
          Department: {user.company?.department}
        </p>

      </div>

    </div>
  );
}

export default UserDetails;