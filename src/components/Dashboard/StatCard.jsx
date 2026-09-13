function StatCard({ title, value, change, icon }) {

  return (
    <div className="stat-card">

      <div className="stat-card-top">

        <div>
          <p className="stat-title">
            {title}
          </p>

          <h2 className="stat-value">
            {value}
          </h2>
        </div>

        <div className="stat-icon">
          {icon}
        </div>

      </div>

      <p className="stat-change">
        {change}
      </p>

    </div>
  );
}

export default StatCard;