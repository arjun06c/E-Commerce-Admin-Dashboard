function UserFilters({
  search,
  setSearch,
  gender,
  setGender
}) {

  return (
    <div className="user-filters">

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="all">All Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

    </div>
  );
}

export default UserFilters;