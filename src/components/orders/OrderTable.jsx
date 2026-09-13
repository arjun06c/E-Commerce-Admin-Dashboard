function OrderTable({ orders }) {

  return (
    <div className="table-container">

      <table className="order-table">

        <thead>
          <tr>

            <th>
              Order ID
            </th>

            <th>
              User ID
            </th>

            <th>
              Products
            </th>

            <th>
              Quantity
            </th>

            <th>
              Total
            </th>

            <th>
              Discounted Total
            </th>

          </tr>
        </thead>

        <tbody>

          {orders.map((order) => (

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

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default OrderTable;