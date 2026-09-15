import StatCard from "../components/Dashboard/StatCard";
import RevenueChart from "../components/Dashboard/RevenueChart";
import SalesChart from "../components/Dashboard/SalesChart";
import RecentOrders from "../components/Dashboard/RecentOrders";

function Dashboard() {

  return (
    <div>

      <h1>Dashboard</h1>

      <p className="dashboard-subtitle">
        Overview of your business performance
      </p>

      <div className="stats-grid">

        <StatCard
          title="Total Revenue"
          value="$45,230"
          icon="💰"
          description="+12.5% from last month"
        />

        <StatCard
          title="Total Orders"
          value="1,245"
          icon="🛒"
          description="+8.2% from last month"
        />

        <StatCard
          title="Total Customers"
          value="8,540"
          icon="👥"
          description="+5.7% from last month"
        />

        <StatCard
          title="Total Products"
          value="1,240"
          icon="📦"
          description="+3.4% from last month"
        />

      </div>

      {/* TWO CHARTS SIDE BY SIDE */}
      <div className="dashboard-charts">

        <RevenueChart />

        <SalesChart />

      </div>

      <RecentOrders />

    </div>
  );
}

export default Dashboard;