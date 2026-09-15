import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SalesChart() {

  const data = [
    {
      category: "Beauty",
      sales: 4200
    },
    {
      category: "Fragrances",
      sales: 3500
    },
    {
      category: "Furniture",
      sales: 2800
    },
    {
      category: "Groceries",
      sales: 3900
    },
    {
      category: "Electronics",
      sales: 5200
    }
  ];

  return (
    <div className="chart-card sales-chart-card">

      <div className="chart-header">

        <div>
          <h2>Sales Overview</h2>

          <p>
            Sales by product category
          </p>
        </div>

      </div>

      <div className="sales-chart-container">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 5
            }}
            barCategoryGap="20%"
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="category"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="sales"
              name="Sales"
              radius={[6, 6, 0, 0]}
              maxBarSize={42}
            >

              {data.map((entry) => (
                <Cell
                  key={entry.category}
                  fill="#2563eb"
                />
              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SalesChart;