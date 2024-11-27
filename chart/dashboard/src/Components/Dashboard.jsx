import React from "react";
import { FaHome, FaProjectDiagram, FaBell, FaClock, FaCog, FaSignOutAlt, FaSyncAlt, FaSearch } from "react-icons/fa";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";

// Register Chart.js components
ChartJS.register(Tooltip, Legend, LinearScale, PointElement);

const Dashboard = () => {
  // Sample data and chart options
  const lastUpdated = "October 25, 2023 at 2:31 PM";
  const filters = [
    { label: "Business unit", options: ["All business units", "Unit 1", "Unit 2"] },
    { label: "Area", options: ["All areas", "Area 1", "Area 2"] },
    { label: "Field", options: ["All fields", "Field 1", "Field 2"] },
    { label: "Manufacturer", options: ["All manufacturers", "Manufacturer 1", "Manufacturer 2"] },
    { label: "Well", options: ["All wells", "Well 1", "Well 2"] },
    { label: "Well group", options: ["All well groups", "Group 1", "Group 2"] },
  ];
  const chartData = {
    datasets: [
      {
        label: "Min PIP",
        data: Array.from({ length: 50 }, () => ({ x: Math.random() * 60 + 30, y: Math.random() * 6000 })),
        backgroundColor: "#1E88E5",
        pointStyle: "triangle",
      },
      {
        label: "Max HZ",
        data: Array.from({ length: 50 }, () => ({ x: Math.random() * 60 + 30, y: Math.random() * 6000 })),
        backgroundColor: "#64B5F6",
        pointStyle: "triangle",
      },
      {
        label: "Wells",
        data: Array.from({ length: 50 }, () => ({ x: Math.random() * 60 + 30, y: Math.random() * 6000 })),
        backgroundColor: "#BBDEFB",
        pointStyle: "triangle",
      },
    ],
  };
  const chartOptions = {
    scales: {
      x: { title: { display: true, text: "Frequency (Hz)", color: "#fff" }, ticks: { color: "#fff" } },
      y: { title: { display: true, text: "Pump Intake Pressure (psig)", color: "#fff" }, ticks: { color: "#fff" } },
    },
    plugins: {
      legend: { position: "bottom", labels: { color: "#fff", usePointStyle: true } },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#121212" }}>
      {/* Sidebar */}
      <div className="h-screen w-20 bg-gray-900 flex flex-col justify-between items-center py-4">
        <div className="space-y-8">
          <div className="text-orange-500 text-4xl font-bold">X</div>
          <div className="space-y-6">
            {[FaHome, FaProjectDiagram, FaBell, FaClock, FaCog].map((Icon, index) => (
              <button key={index} className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
                <Icon className="text-white text-xl" />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-12 h-12 rounded-full"
          />
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            <FaSignOutAlt className="text-white text-xl" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* HeaderBar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
            backgroundColor: "#121212",
            color: "#fff",
            borderBottom: "1px solid #2A2A2A",
          }}
        >
          <div style={{ fontWeight: "bold" }}>Optimization Dashboard</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#9E9E9E", fontSize: "14px" }}>Last updated on {lastUpdated}</span>
            <FaSyncAlt style={{ cursor: "pointer", color: "#9E9E9E" }} />
          </div>
        </div>

        {/* FilterHeader */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#121212",
            borderBottom: "1px solid #2A2A2A",
          }}
        >
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {filters.map((filter, index) => (
              <div key={index} style={{ width: "130px" }}>
                <label style={{ color: "#9E9E9E", fontSize: "12px" }}>{filter.label}</label>
                <select style={{ width: "100%", padding: "0.5rem", backgroundColor: "#212121", color: "#fff" }}>
                  {filter.options.map((option, i) => (
                    <option key={i}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button style={{ color: "#64B5F6", background: "none", border: "none" }}>Clear filters</button>
          </div>
        </div>

        {/* RecommendationChart */}
        <div style={{ flex: 1, padding: "1rem", overflowY: "auto" }}>
          <h3 style={{ color: "#fff" }}>Recommendations</h3>
          <div style={{ height: "400px", backgroundColor: "#212121", padding: "1rem", borderRadius: "8px" }}>
            <Scatter data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
