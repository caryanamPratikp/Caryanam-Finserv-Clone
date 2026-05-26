import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  FaTachometerAlt,
  FaCar,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaBell,
} from "react-icons/fa";

import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaChartLine,
} from "react-icons/fa";

import ManageCars from "./ManageCars";
import ManageUsers from "./ManageUsers";
import DealerReports from "./DealerReports";

const DealerDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [carFilter, setCarFilter] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Cars",
      icon: <FaCar />,
    },
    {
      name: "Users",
      icon: <FaUsers />,
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
    },
    {
      name: "Settings",
      icon: <FaCog />,
    },
  ];

  const recentActivities = [
  {
    title: "New Car Added",
    description: "Mahindra Scorpio N added to inventory",
    time: "2 hours ago",
    type: "add",
  },

  {
    title: "Loan Approved",
    description: "HDFC approved Rahul Sharma loan",
    time: "5 hours ago",
    type: "approved",
  },

  {
    title: "Loan Rejected",
    description: "ICICI rejected Amit Patil application",
    time: "Yesterday",
    type: "rejected",
  },

  {
    title: "Car Sold",
    description: "Hyundai Creta sold in Pune",
    time: "Yesterday",
    type: "sold",
  },
];

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    toast.success("Logged out successfully");

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="flex h-screen bg-[#F4F6F9] overflow-hidden font-sans">

      {/* SIDEBAR */}
      <div
        className={`bg-[#0B2A4A] text-white transition-all duration-300 flex flex-col
        ${sidebarOpen ? "w-72" : "w-24"}`}
      >

        {/* LOGO */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-[#27D3C3] flex items-center justify-center text-2xl">
              🚗
            </div>

            {sidebarOpen && (
              <div>
                <h1 className="text-2xl font-bold">
                  Caryanam
                </h1>

                <p className="text-sm text-gray-300">
                  FinServ
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-xl"
          >
            <FaBars />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 mt-8 px-4">

          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl mb-4 transition-all duration-200
              ${
                activeMenu === item.name
                  ? "bg-[#27D3C3] text-[#0B2A4A] font-bold"
                  : "hover:bg-white/10"
              }`}
            >
              <span className="text-lg">
                {item.icon}
              </span>

              {sidebarOpen && (
                <span className="text-sm">
                  {item.name}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-white/10 mt-auto">

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl
            bg-red-500 hover:bg-red-600 transition-all text-white font-medium"
          >
            <FaSignOutAlt className="text-lg" />

            {sidebarOpen && (
              <span>
                Logout
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto">

        {/* TOPBAR */}
        <div className="bg-white px-8 py-5 flex items-center justify-between shadow-sm">

          <div>
            <h2 className="text-3xl font-bold text-[#0B2A4A]">

              {activeMenu === "Cars"
                ? "Manage Cars"
                : activeMenu === "Users"
                ? "Users"
                : activeMenu === "Reports"
                ? "Reports"
                : activeMenu === "Settings"
                ? "Settings"
                : "Dealer Dashboard"}

            </h2>

            <p className="text-gray-500 mt-1">
              Welcome back 👋
            </p>
          </div>

          <div className="flex items-center gap-5">

            <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-[#0B2A4A]">
              <FaBell />
            </button>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-full bg-[#0B2A4A] text-white flex items-center justify-center font-bold">
                D
              </div>

              <div>
                <h4 className="font-semibold text-[#0B2A4A]">
                  Dealer Admin
                </h4>

                <p className="text-sm text-gray-500">
                  dealer@caryanam.com
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-8">

          {/* CARS PAGE */}
          {activeMenu === "Cars" && (
            <ManageCars carFilter={carFilter} />
          )}

          {/* DASHBOARD PAGE */}
          {activeMenu === "Dashboard" && (
            <>
              {/* STATS */}
              {/* STATS */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

  {/* TOTAL CARS */}
  <div
    onClick={() => {
  setCarFilter("");
  setActiveMenu("Cars");
}}
    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
  >
    <p className="text-gray-500 text-sm">
      Total Cars
    </p>

    <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
      120
    </h2>

    <p className="text-[#27D3C3] mt-2 text-sm">
      View all cars
    </p>
  </div>

  {/* AVAILABLE CARS */}
  <div
    onClick={() => {
      setCarFilter("Available");
      setActiveMenu("Cars");
    }}
    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
  >
    <p className="text-gray-500 text-sm">
      Available Cars
    </p>

    <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
      85
    </h2>

    <p className="text-green-500 mt-2 text-sm">
      Ready for sale
    </p>
  </div>

  {/* SOLD CARS */}
  <div
    onClick={() => {
      setCarFilter("Sold");
      setActiveMenu("Cars");
    }}
    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
  >
    <p className="text-gray-500 text-sm">
      Sold Cars
    </p>

    <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
      35
    </h2>

    <p className="text-red-500 mt-2 text-sm">
      Sold vehicles
    </p>
  </div>

  {/* USERS */}
  <div
    onClick={() => setActiveMenu("Users")}
    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-all"
  >
    <p className="text-gray-500 text-sm">
      Total Users
    </p>

    <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
      210
    </h2>

    <p className="text-[#27D3C3] mt-2 text-sm">
      Active users
    </p>
  </div>

</div>

{/* RECENT ACTIVITIES */}
<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-8">

  <div className="mb-8">

    <h3 className="text-2xl font-bold text-[#0B2A4A]">
      Recent Activities
    </h3>

    <p className="text-gray-500 mt-1">
      Latest dealer and sales updates
    </p>

  </div>

  <div className="space-y-5">

    {recentActivities.map((activity, index) => (

      <div
        key={index}
        className="flex items-center justify-between bg-gray-50 rounded-2xl p-5"
      >

        <div className="flex items-center gap-4">

          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl
            ${
              activity.type === "approved"
                ? "bg-green-100 text-green-600"
                : activity.type === "rejected"
                ? "bg-red-100 text-red-600"
                : activity.type === "sold"
                ? "bg-blue-100 text-blue-600"
                : "bg-[#27D3C3]/20 text-[#0B2A4A]"
            }`}
          >

            {activity.type === "approved" ? (
              <FaCheckCircle />
            ) : activity.type === "rejected" ? (
              <FaTimesCircle />
            ) : activity.type === "sold" ? (
              <FaChartLine />
            ) : (
              <FaClock />
            )}

          </div>

          <div>

            <h4 className="font-bold text-[#0B2A4A]">
              {activity.title}
            </h4>

            <p className="text-gray-500 text-sm mt-1">
              {activity.description}
            </p>

          </div>

        </div>

        <p className="text-sm text-gray-400">
          {activity.time}
        </p>

      </div>
    ))}

  </div>

</div>
            </>
          )}

          {/* USERS PAGE */}
          {activeMenu === "Users" && (
  <ManageUsers />
)}

          {/* REPORTS PAGE */}
          {activeMenu === "Reports" && (
  <DealerReports />
)}

          {/* SETTINGS PAGE */}
          {activeMenu === "Settings" && (
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0B2A4A]">
                Settings Module
              </h2>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;