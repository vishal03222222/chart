import React from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaBell,
  FaClock,
  FaCog,
  FaSignOutAlt,
  FaLocationArrow
} from "react-icons/fa";
import {Link} from 'react-router-dom'
const SideBar = () => {
  return (
    <div className="h-screen w-[5%] bg-gray-900 flex flex-col justify-between items-center py-4 sticky top-0">
      {/* Top Section */}
      <div className="space-y-8 ">
        {/* Logo */}
        
        
        <div style={{marginLeft:"13px"}} className="text-orange-500 text-4xl ml-13px font-bold">
        <Link to={'/logopage'}>X</Link>
        </div>


      
        {/* Icons */}
        <div className="space-y-6">
          <button className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-md hover:bg-gray-600">
            
            <Link to={'/'}><FaHome className="text-white text-xl" /></Link>
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            <FaProjectDiagram className="text-white text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            <FaBell className="text-white text-xl" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            
          <Link to={'/clock'}><FaClock className="text-white text-xl" /></Link>
          </button>
          <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
            
            <Link to={'/Maps'} ><FaLocationArrow className="text-white text-xl" /></Link>
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        {/* User Profile */}
        <img
          src="https://via.placeholder.com/40" // Replace with your profile image URL
          alt="User Profile"
          className="w-12 h-12 rounded-full"
        />
        {/* Logout */}
        <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-600">
          <FaSignOutAlt className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
