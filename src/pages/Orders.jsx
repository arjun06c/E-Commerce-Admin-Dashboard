import { useEffect, useState } from "react";
import api from "../services/api";

import OrderTable from "../components/orders/OrderTable";
import OrderFilters from "../components/orders/OrderFilters";
import Pagination from "../components/common/Pagination";
import Loader from "../components/common/Loader";   
import ErrorMessage from "../components/common/ErrorMessage";
function Orders() {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 5;


  useEffect(() => {
    fetchOrders();
  }, []);


  const fetchOrders = async () => {

    try {

      setLoading(true);

      const response = await api.get("/carts");

      setOrders(response.data.carts);

    } catch (error) {

      setError("Unable to load orders.");

    } finally {

      setLoading(false);

    }

  };


  const filteredOrders = orders.filter((order) => {

    const orderId = order.id.toString();

    const userId = order.userId.toString();

    const matchesSearch =
      orderId.includes(search) ||
      userId.includes(search);

    return matchesSearch;

  });


  const totalPages = Math.ceil(
    filteredOrders.length / ordersPerPage
  );


  const startIndex =
    (currentPage - 1) * ordersPerPage;


  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage
  );


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


 if (loading) {
  return <Loader message="Loading orders..." />;
}
if (error) {
  return (
    <ErrorMessage
      message={error}
      onRetry={fetchOrders}
    />
  );
}
  return (
    <div>

      <h1>Orders</h1>

      <p>
        Total Orders: {filteredOrders.length}
      </p>


      <OrderFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />


      <OrderTable
        orders={paginatedOrders}
      />


      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

    </div>
  );
}

export default Orders;