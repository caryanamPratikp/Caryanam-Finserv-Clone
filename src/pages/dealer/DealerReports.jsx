import React from "react";
import {
  FaChartLine,
  FaCar,
  FaUsers,
  FaRupeeSign,
  FaArrowUp,
  FaArrowDown,
  FaChevronRight,
} from "react-icons/fa";

const DealerReports = () => {

  const [selectedReport, setSelectedReport] =
    React.useState("sales");

  const topSellingCars = [
    {
      name: "Hyundai Creta",
      sales: 48,
      revenue: "₹7.2 Cr",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Mahindra Thar",
      sales: 39,
      revenue: "₹6.1 Cr",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Tata Nexon",
      sales: 34,
      revenue: "₹4.8 Cr",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    },

    {
      name: "Hyundai Verna",
      sales: 27,
      revenue: "₹4.1 Cr",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const monthlyData = [
    { month: "Jan", sales: 22 },
    { month: "Feb", sales: 35 },
    { month: "Mar", sales: 41 },
    { month: "Apr", sales: 58 },
    { month: "May", sales: 67 },
    { month: "Jun", sales: 72 },
  ];

  return (

    <div className="p-8">

      {/* HEADER */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-[#0B2A4A]">
          Reports & Analytics
        </h2>

        <p className="text-gray-500 mt-1">
          Sales insights, car analytics and business performance
        </p>

      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {/* TOTAL SALES */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Total Sales
              </p>

              <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
                248
              </h2>

              <p className="text-green-500 mt-2 text-sm flex items-center gap-2">

                <FaArrowUp />

                +18% this month

              </p>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">

              <FaChartLine />

            </div>

          </div>

        </div>

        {/* REVENUE */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Revenue Generated
              </p>

              <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
                ₹32Cr
              </h2>

              <p className="text-green-500 mt-2 text-sm flex items-center gap-2">

                <FaArrowUp />

                +11% growth

              </p>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">

              <FaRupeeSign />

            </div>

          </div>

        </div>

        {/* CARS */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Cars Added
              </p>

              <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
                72
              </h2>

              <p className="text-[#27D3C3] mt-2 text-sm">
                Inventory updated
              </p>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#27D3C3]/20 text-[#0B2A4A] flex items-center justify-center text-2xl">

              <FaCar />

            </div>

          </div>

        </div>

        {/* USERS */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                Active Users
              </p>

              <h2 className="text-4xl font-bold text-[#0B2A4A] mt-3">
                1,284
              </h2>

              <p className="text-red-500 mt-2 text-sm flex items-center gap-2">

                <FaArrowDown />

                -2% this week

              </p>

            </div>

            <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl">

              <FaUsers />

            </div>

          </div>

        </div>

      </div>

      {/* ANALYTICS */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          <div>

            <h3 className="text-2xl font-bold text-[#0B2A4A]">
              Reports & Analytics
            </h3>

            <p className="text-gray-500 mt-1">
              Interactive business analytics dashboard
            </p>

          </div>

          <button className="w-12 h-12 rounded-2xl bg-[#0B2A4A] text-white flex items-center justify-center hover:scale-105 transition-all">

            <FaChevronRight />

          </button>

        </div>

        {/* REPORT BUTTONS */}
        <div className="flex items-center gap-3 overflow-x-auto mb-10">

          <button
            onClick={() => setSelectedReport("sales")}
            className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all whitespace-nowrap
            ${
              selectedReport === "sales"
                ? "bg-[#0B2A4A] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Sales Report
          </button>

          <button
            onClick={() => setSelectedReport("revenue")}
            className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all whitespace-nowrap
            ${
              selectedReport === "revenue"
                ? "bg-[#27D3C3] text-[#0B2A4A]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Revenue
          </button>

          <button
            onClick={() => setSelectedReport("inventory")}
            className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all whitespace-nowrap
            ${
              selectedReport === "inventory"
                ? "bg-purple-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Inventory
          </button>

          <button
            onClick={() => setSelectedReport("users")}
            className={`px-5 py-3 rounded-2xl text-sm font-medium transition-all whitespace-nowrap
            ${
              selectedReport === "users"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Users
          </button>

        </div>

        {/* SALES REPORT */}
        {selectedReport === "sales" && (

          <div>

            <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2">
              Monthly Sales Overview
            </h3>

            <p className="text-gray-500 mb-8">
              Cars sold in last 6 months
            </p>

            <div className="flex items-end gap-6 h-80">

              {monthlyData.map((item, index) => (

                <div
                  key={index}
                  className="flex-1 flex flex-col items-center"
                >

                  <div
                    className="w-full bg-[#27D3C3] rounded-t-3xl hover:opacity-80 transition-all"
                    style={{
                      height: `${item.sales * 4}px`,
                    }}
                  />

                  <p className="mt-4 text-sm font-medium text-gray-600">
                    {item.month}
                  </p>

                </div>

              ))}

            </div>

          </div>
        )}

        {/* REVENUE REPORT */}
        {selectedReport === "revenue" && (

          <div>

            <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2">
              Revenue Growth
            </h3>

            <p className="text-gray-500 mb-8">
              Revenue generated over months
            </p>

            <div className="space-y-6">

              {[45, 60, 72, 85, 92, 100].map((value, index) => (

                <div key={index}>

                  <div className="flex justify-between mb-2">

                    <span className="font-medium text-gray-600">
                      Month {index + 1}
                    </span>

                    <span className="font-bold text-[#0B2A4A]">
                      ₹{value}L
                    </span>

                  </div>

                  <div className="w-full h-5 bg-gray-100 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#27D3C3] rounded-full"
                      style={{
                        width: `${value}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

        {/* INVENTORY REPORT */}
        {selectedReport === "inventory" && (

          <div>

            <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2">
              Inventory Distribution
            </h3>

            <p className="text-gray-500 mb-8">
              Cars available by category
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                { type: "SUV", count: 48 },
                { type: "Sedan", count: 24 },
                { type: "Hatchback", count: 18 },
                { type: "Luxury", count: 12 },
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-gray-50 rounded-3xl p-6 text-center"
                >

                  <div className="w-24 h-24 mx-auto rounded-full border-[10px] border-purple-500 flex items-center justify-center text-2xl font-bold text-[#0B2A4A]">

                    {item.count}

                  </div>

                  <h4 className="mt-5 text-lg font-bold text-[#0B2A4A]">
                    {item.type}
                  </h4>

                </div>

              ))}

            </div>

          </div>
        )}

        {/* USERS REPORT */}
        {selectedReport === "users" && (

          <div>

            <h3 className="text-2xl font-bold text-[#0B2A4A] mb-2">
              User Activity
            </h3>

            <p className="text-gray-500 mb-8">
              User registrations and engagement
            </p>

            <div className="flex items-end justify-between gap-4 h-80">

              {[120, 180, 140, 220, 260, 300, 280].map((value, index) => (

                <div
                  key={index}
                  className="flex flex-col items-center w-full"
                >

                  <div
                    className="w-full bg-orange-400 rounded-t-3xl"
                    style={{
                      height: `${value / 1.5}px`,
                    }}
                  />

                  <p className="mt-3 text-sm text-gray-600">
                    W{index + 1}
                  </p>

                </div>

              ))}

            </div>

          </div>
        )}

      </div>

      {/* TOP SELLING CARS */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">

        <div className="mb-8">

          <h3 className="text-2xl font-bold text-[#0B2A4A]">
            Top Selling Cars
          </h3>

          <p className="text-gray-500 mt-1">
            Best performing vehicles this month
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {topSellingCars.map((car, index) => (

            <div
              key={index}
              className="border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all"
            >

              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-bold text-[#0B2A4A]">
                  {car.name}
                </h3>

                <div className="mt-4 space-y-2">

                  <p className="text-gray-600">
                    Cars Sold:
                    <span className="font-bold text-[#0B2A4A] ml-2">
                      {car.sales}
                    </span>
                  </p>

                  <p className="text-gray-600">
                    Revenue:
                    <span className="font-bold text-[#27D3C3] ml-2">
                      {car.revenue}
                    </span>
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default DealerReports;