import "./App.css";

import SideBar from "./Components/SideBar";
import Dashboard from "./Components/Dashboard";
import FrequencyTable from "./Components/FrequencyTable";
import HeaderBar from "./Components/HeaderBar";
import HeaderFilter from "./Components/HeaderFilter";
import RecommendationChart from "./Components/RecommendationChart";
import TrackedFrequency from "./Components/TrackedFrequency";

function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      <SideBar />

      {/* Main Content Section */}
      <div className="w-[95%] h-screen overflow-y-auto">
        <HeaderBar />
        <HeaderFilter />
        <RecommendationChart />
        <FrequencyTable />
        <TrackedFrequency />
      </div>
    </div>
  );
}

export default App;

