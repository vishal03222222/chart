import "./App.css";

import SideBar from "./Components/SideBar";
import Dashboard from "./Components/Dashboard";
import FrequencyTable from "./Components/FrequencyTable";
import HeaderBar from "./Components/HeaderBar";
import HeaderFilter from "./Components/HeaderFilter";
import RecommendationChart from "./Components/RecommendationChart";
import TrackedFrequency from "./Components/TrackedFrequency";
import Locationpage from "./Locationpage/Lpage";
import { Routes, Route } from 'react-router-dom'
import Clockpage from "./clockpage/Cpage";
function App() {
  return (
    <div className="flex h-screen bg-gray-900">


      <SideBar />

      {/* Main Content Section */}
      <div className="w-[95%] h-screen overflow-y-auto">
        <Routes>
          <Route path='/' />
          <Route path='/Maps' element={<Locationpage />} />
          <Route path='/clock' element={<Clockpage />} />

        </Routes>

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

