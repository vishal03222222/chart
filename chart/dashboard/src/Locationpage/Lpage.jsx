import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

const AlertCard = ({ title, timeSent, alertThreshold, source }) => (
    <div className="p-4 border border-blue-500 rounded-md mb-4 bg-gray-800 text-white">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="px-2 py-1 bg-red-500 text-xs rounded-md">Active alert</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-400">Alert sent</p>
          <p className="text-sm bg-gray-700 p-2 rounded-md">{timeSent}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Alert sent</p>
          <p className="text-sm bg-gray-700 p-2 rounded-md">{timeSent}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Alerting source</p>
          <p className="text-sm bg-gray-700 p-2 rounded-md">{source}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Alert Threshold</p>
          <p className="text-sm bg-gray-700 p-2 rounded-md">{alertThreshold}</p>
        </div>
      </div>
    </div>
  );
  
    const alerts = [
      {
        title: "GLACIER ROCK 15",
        timeSent: "9:45 pm CT, 6/26/2023",
        source: "[Value]",
        alertThreshold: "[Num] kg/hr @ 4hr CH4",
      },
      {
        title: "TITAN RIDGE 4",
        timeSent: "8:30 pm CT, 6/24/2023",
        source: "[Value]",
        alertThreshold: "[Num] kg/hr @ 4hr CH4",
      },
      {
        title: "HORIZON ECHO 7",
        timeSent: "7:15 pm CT, 6/23/2023",
        source: "[Value]",
        alertThreshold: "[Num] kg/hr @ 4hr CH4",
      },
      {
        title: "SUMMIT PEAK 11",
        timeSent: "7:15 pm CT, 6/23/2023",
        source: "[Value]",
        alertThreshold: "[Num] kg/hr @ 4hr CH4",
      },
    ];
// map
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with your icon URL
    iconSize: [30, 30], // Size of the icon
    iconAnchor: [15, 30], // Anchor of the icon
  });
  const markers = [
    { id: 1, lat: 32.7767, lng: -96.797, name: "Location 1" },
    { id: 2, lat: 32.7917, lng: -96.767, name: "Location 2" },
    { id: 3, lat: 32.7617, lng: -96.807, name: "Location 3" },
    { id: 4, lat: 32.7767, lng: -96.807, name: "Location 4" },
    { id: 5, lat: 32.7717, lng: -96.767, name: "Location 5" },
  ];

const Locationpage = () => {
    const [activeTab, setActiveTab] = useState("emission");
  return (
    
   <div>
     <div className="bg-gray-900 text-white flex items-center justify-between p-3">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <span>Operations overview</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
          <span>10/25/2024 5:00 PM - 10/26/2024 5:00 PM</span>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
          <span>Hierarchy / Sites</span>
        </button>
        <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
          <span>Status</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search customers, sites or issues"
            className="px-4 py-2 bg-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
    <div style={{display:'flex'}}> 
        {/* tabs */}
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("emission")}
          className={`px-4 py-2 ${
            activeTab === "emission" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"
          }`}
        >
          Emission alerts
        </button>
        <button
          onClick={() => setActiveTab("asset")}
          className={`px-4 py-2 ${
            activeTab === "asset" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"
          }`}
        >
          Asset alerts
        </button>
      </div>

      {/* Alert Cards */}
      {activeTab === "emission" && (
        <div>
          {alerts.map((alert, index) => (
            <AlertCard
              key={index}
              title={alert.title}
              timeSent={alert.timeSent}
              source={alert.source}
              alertThreshold={alert.alertThreshold}
            />
          ))}
        </div>
      )}
      {activeTab === "asset" && <div>No asset alerts available.</div>}
    </div>
  {/* MAP */}
    <div className="h-screen bg-gray-900">
      <MapContainer
        center={[32.7767, -96.797]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">{marker.name}</h3>
                <p>Lat: {marker.lat}, Lng: {marker.lng}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Right Sidebar Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="p-2 bg-blue-500 text-white rounded shadow">
          Tool 1
        </button>
        <button className="p-2 bg-green-500 text-white rounded shadow">
          Tool 2
        </button>
        <button className="p-2 bg-gray-500 text-white rounded shadow">
          Tool 3
        </button>
      </div>
    </div>
    </div>
   </div>
  );
};

export default Locationpage;
