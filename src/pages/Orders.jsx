import { useEffect, useState } from "react";
import api from "../services/api";
import OrderTable from "../components/orders/OrderTable";
function Orders() {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


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


  if (loading) {
    return <h2>Loading orders...</h2>;
  }


  if (error) {
    return <h2>{error}</h2>;
  }


  return (
  <div>

    <h1>Orders</h1>

    <p>
      Total Orders: {orders.length}
    </p>

    <OrderTable
      orders={orders}
    />

  </div>
);
}

export default Orders;