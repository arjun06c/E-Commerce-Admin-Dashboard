function OrderFilters({
  search,
  setSearch,
  status,
  setStatus
}) {

  return (
    <div className="order-filters">

      <input
        type="text"
        placeholder="Search orders..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >

        <option value="all">
          All Orders
        </option>

        <option value="pending">
          Pending
        </option>

        <option value="processing">
          Processing
        </option>

        <option value="completed">
          Completed
        </option>

        <option value="cancelled">
          Cancelled
        </option>

      </select>

    </div>
  );
}

export default OrderFilters;