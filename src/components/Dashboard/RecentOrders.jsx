function RecentOrders() {

  const orders = [
    {
      id: 1001,
      customer: "John Smith",
      product: "iPhone 15",
      amount: 999,
      status: "Completed"
    },
    {
      id: 1002,
      customer: "Sarah Wilson",
      product: "MacBook Air",
      amount: 1299,
      status: "Processing"
    },
    {
      id: 1003,
      customer: "David Brown",
      product: "AirPods Pro",
      amount: 249,
      status: "Pending"
    },
    {
      id: 1004,
      customer: "Emily Davis",
      product: "iPad Air",
      amount: 599,
      status: "Completed"
    },
    {
      id: 1005,
      customer: "Michael Lee",
      product: "Apple Watch",
      amount: 399,
      status: "Cancelled"
    }
  ];


  return (
    <div className="recent-orders">

      <div className="section-header">

        <div>
          <h2>Recent Orders</h2>

          <p>
            Latest customer orders
          </p>
        </div>

      </div>


      <div className="table-container">

        <table className="recent-orders-table">

          <thead>
            <tr>

              <th>
                Order ID
              </th>

              <th>
                Customer
              </th>

              <th>
                Product
              </th>

              <th>
                Amount
              </th>

              <th>
                Status
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
                  {order.customer}
                </td>

                <td>
                  {order.product}
                </td>

                <td>
                  ${order.amount}
                </td>

                <td>

                  <span
                    className={`order-status ${order.status.toLowerCase()}`}
                  >
                    {order.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentOrders;