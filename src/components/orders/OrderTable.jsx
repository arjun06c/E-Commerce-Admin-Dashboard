function OrderTable({ orders }) {

  const getOrderStatus = (orderId) => {

    const statusNumber = orderId % 4;

    if (statusNumber === 0) {
      return "Completed";
    }

    if (statusNumber === 1) {
      return "Processing";
    }

    if (statusNumber === 2) {
      return "Pending";
    }

    return "Cancelled";
  };


  return (
    <div className="table-container">

      <table className="order-table">

        <thead>
          <tr>

            <th>Order ID</th>

            <th>User ID</th>

            <th>Products</th>

            <th>Quantity</th>

            <th>Total</th>

            <th>Discounted Total</th>

            <th>Status</th>

          </tr>
        </thead>

        <tbody>

          {orders.map((order) => {

            const status = getOrderStatus(order.id);

            return (
              <tr key={order.id}>

                <td>
                  #{order.id}
                </td>

                <td>
                  User #{order.userId}
                </td>

                <td>
                  {order.totalProducts}
                </td>

                <td>
                  {order.totalQuantity}
                </td>

                <td>
                  ${order.total}
                </td>

                <td>
                  ${order.discountedTotal}
                </td>

                <td>

                  <span
                    className={`order-status ${status.toLowerCase()}`}
                  >
                    {status}
                  </span>

                </td>

              </tr>
            );

          })}

        </tbody>

      </table>

    </div>
  );
}

export default OrderTable;