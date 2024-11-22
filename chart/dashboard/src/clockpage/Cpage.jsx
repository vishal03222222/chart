import React from "react";
import { FaSync } from "react-icons/fa";

const Clockpage = () => {
  return (
    <div>
    <div className="bg-gray-900 text-white px-4 py-3">
      {/* Title and Refresh Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Control Room</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span>Last updated on October 25, 2023 at 2:31 PM</span>
          <button className="text-white hover:text-blue-400">
            <FaSync />
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-6 mt-4 border-b border-gray-700">
        <button className="text-white font-medium border-b-2 border-orange-500 px-4 py-2">
          Wells
        </button>
        <button className="text-gray-400 hover:text-white px-4 py-2">
          Tickets
        </button>
        <button className="text-gray-400 hover:text-white px-4 py-2">
          Tasks
        </button>
      </div>
    </div>
    <div className="bg-gray-900 text-white px-6 py-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Well watchlists</h2>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
          + Build watchlist
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-4">
        {/* Card 1: All Wells */}
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:border-blue-500 border border-transparent">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium">All wells</h3>
            <button className="text-gray-400 hover:text-white">...</button>
          </div>
          <p className="text-gray-400 text-sm mt-2">All active wells in region A</p>
          <p className="text-3xl font-bold mt-4">34</p>
        </div>

        {/* Card 2: Shutdown Wells */}
        <div className="bg-gray-800 p-4 rounded-lg shadow border border-blue-500">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium">Shutdown wells</h3>
            <button className="text-gray-400 hover:text-white">...</button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            All wells with a shutdown status or a health score of 0
          </p>
          <p className="text-3xl font-bold mt-4">8</p>
        </div>

        {/* Card 3: Low Performing Wells */}
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:border-blue-500 border border-transparent">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium">Low performing wells</h3>
            <button className="text-gray-400 hover:text-white">...</button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            All wells with a health score below 70
          </p>
          <p className="text-3xl font-bold mt-4">10</p>
        </div>

        {/* Card 4: Personal Well Watchlist */}
        <div className="bg-gray-800 p-4 rounded-lg shadow hover:border-blue-500 border border-transparent">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium">Personal well watchlist</h3>
            <button className="text-gray-400 hover:text-white">...</button>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Wells I'm currently monitoring for optimization
          </p>
          <p className="text-3xl font-bold mt-4">10</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Clockpage;
