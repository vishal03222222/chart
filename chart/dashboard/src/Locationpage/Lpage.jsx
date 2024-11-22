import React from "react";

const Navbar = () => {
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
    <div>
        <div>left side</div>
        <div>right side</div>
    </div>
   </div>
  );
};

export default Navbar;
