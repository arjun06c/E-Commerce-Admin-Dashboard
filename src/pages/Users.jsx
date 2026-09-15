import { useEffect, useState } from "react";
import api from "../services/api";
import UserTable from "../components/users/UserTable";
import UserFilters from "../components/users/UserFilters";
import Pagination from "../components/common/Pagination";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
function Users() {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

const [gender, setGender] = useState("all");
const [sortField, setSortField] = useState("");
const [sortOrder, setSortOrder] = useState("asc");
const [currentPage, setCurrentPage] = useState(1);

const [totalUsers, setTotalUsers] = useState(0);

const usersPerPage = 10;

 
useEffect(() => {

  fetchUsers();

}, [currentPage]);


  const fetchUsers = async () => {

    try {

      setLoading(true);

      const skip = (currentPage - 1) * usersPerPage;

const response = await api.get(
  `/users?limit=${usersPerPage}&skip=${skip}`
);

setUsers(response.data.users);

setTotalUsers(response.data.total);

    } catch (error) {

      setError("Unable to load users.");

    } finally {

      setLoading(false);

    }

  };
  const filteredUsers = users.filter((user) => {

  const fullName =
    `${user.firstName} ${user.lastName}`.toLowerCase();

  const matchesSearch =
    fullName.includes(search.toLowerCase());

  const matchesGender =
    gender === "all" || user.gender === gender;

  return matchesSearch && matchesGender;

});





const sortUsers = (field) => {

  const newOrder =
    sortField === field && sortOrder === "asc"
      ? "desc"
      : "asc";

  setSortField(field);
  setSortOrder(newOrder);

  const sortedUsers = [...users].sort((a, b) => {

    let valueA;
    let valueB;

    if (field === "firstName") {
      valueA = a.firstName.toLowerCase();
      valueB = b.firstName.toLowerCase();
    } else {
      valueA = a[field];
      valueB = b[field];
    }

    if (valueA < valueB) {
      return newOrder === "asc" ? -1 : 1;
    }

    if (valueA > valueB) {
      return newOrder === "asc" ? 1 : -1;
    }

    return 0;
  });

  setUsers(sortedUsers);
};


const totalPages = Math.ceil(
  totalUsers / usersPerPage
);

const handlePageChange = (page) => {

  setCurrentPage(page);

};

if (loading) {
  return <Loader message="Loading users..." />;
}
  if (error) {
  return (
    <ErrorMessage
      message={error}
      onRetry={fetchUsers}
    />
  );
}

  return (
    <div>

      <h1>Users</h1>

      <UserFilters
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
      />
    
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <UserTable users={filteredUsers}   sortUsers={sortUsers}
/>

    </div>
  );
}

export default Users;