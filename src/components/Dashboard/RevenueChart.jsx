import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function RevenueChart() {

  const data = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 15000 },
    { month: "Mar", revenue: 13000 },
    { month: "Apr", revenue: 18000 },
    { month: "May", revenue: 21000 },
    { month: "Jun", revenue: 24000 },
    { month: "Jul", revenue: 28000 }
  ];


  return (
    <div className="chart-card">

      <div className="chart-header">

        <div>
          <h2>Revenue Overview</h2>

          <p>
            Monthly revenue performance
          </p>
        </div>

      </div>


      <div className="chart-container">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
            />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;