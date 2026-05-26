import React, { useState } from "react";
import {
  FaUsers,
  FaSearch,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
} from "react-icons/fa";

const ManageUsers = () => {

  const usersData = [
    {
      id: 1,
      name: "Rahul Sharma",
      city: "Pune",
      interestedCar: "Mahindra XUV700",
      appliedDate: "12 May 2026",
      loanStatus: "Sanctioned",
      bank: "HDFC Bank",
      amount: "₹18,00,000",
      cibil: 785,
      occupation: "Software Engineer",
      income: "₹1,20,000 / month",
      mobile: "9876543210",
      email: "rahul@gmail.com",
      address: "Baner, Pune",
      profile:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

    {
      id: 2,
      name: "Sneha Patil",
      city: "Mumbai",
      interestedCar: "Hyundai Creta",
      appliedDate: "10 May 2026",
      loanStatus: "Pending",
      bank: "ICICI Bank",
      amount: "₹14,00,000",
      cibil: 720,
      occupation: "Doctor",
      income: "₹1,80,000 / month",
      mobile: "9988776655",
      email: "sneha@gmail.com",
      address: "Andheri, Mumbai",
      profile:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      id: 3,
      name: "Amit Patil",
      city: "Nagpur",
      interestedCar: "Tata Nexon",
      appliedDate: "8 May 2026",
      loanStatus: "Rejected",
      bank: "Axis Bank",
      amount: "₹9,00,000",
      cibil: 610,
      occupation: "Businessman",
      income: "₹70,000 / month",
      mobile: "9123456780",
      email: "amit@gmail.com",
      address: "Sitabuldi, Nagpur",
      profile:
        "https://randomuser.me/api/portraits/men/54.jpg",
    },

    {
      id: 4,
      name: "Priya Deshmukh",
      city: "Nashik",
      interestedCar: "Hyundai Verna",
      appliedDate: "7 May 2026",
      loanStatus: "Sanctioned",
      bank: "SBI Bank",
      amount: "₹12,00,000",
      cibil: 801,
      occupation: "Teacher",
      income: "₹85,000 / month",
      mobile: "9090909090",
      email: "priya@gmail.com",
      address: "College Road, Nashik",
      profile:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },

    {
      id: 5,
      name: "Vikas Jadhav",
      city: "Kolhapur",
      interestedCar: "Mahindra Thar",
      appliedDate: "6 May 2026",
      loanStatus: "Pending",
      bank: "Kotak Bank",
      amount: "₹16,00,000",
      cibil: 740,
      occupation: "Architect",
      income: "₹95,000 / month",
      mobile: "9871234567",
      email: "vikas@gmail.com",
      address: "Shahupuri, Kolhapur",
      profile:
        "https://randomuser.me/api/portraits/men/22.jpg",
    },

    {
      id: 6,
      name: "Rohit More",
      city: "Aurangabad",
      interestedCar: "Maruti WagonR",
      appliedDate: "5 May 2026",
      loanStatus: "Rejected",
      bank: "Bank of Baroda",
      amount: "₹5,00,000",
      cibil: 590,
      occupation: "Sales Executive",
      income: "₹45,000 / month",
      mobile: "9001122334",
      email: "rohit@gmail.com",
      address: "CIDCO, Aurangabad",
      profile:
        "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  const [users] = useState(usersData);

  const [search, setSearch] = useState("");

  const [selectedUser, setSelectedUser] =
    useState(null);

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {

    if (status === "Sanctioned") {

      return "bg-green-100 text-green-700";
    }

    if (status === "Rejected") {

      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-700";
  };

  const getStatusIcon = (status) => {

    if (status === "Sanctioned") {

      return <FaCheckCircle />;
    }

    if (status === "Rejected") {

      return <FaTimesCircle />;
    }

    return <FaClock />;
  };

  return (

    <div className="p-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h2 className="text-3xl font-bold text-[#0B2A4A]">
            Loan Lead Management
          </h2>

          <p className="text-gray-500 mt-1">
            Manage all customer loan applications
          </p>

        </div>

        <div className="bg-[#0B2A4A] text-white px-6 py-4 rounded-2xl">

          <p className="text-sm text-gray-300">
            Total Leads
          </p>

          <h2 className="text-3xl font-bold">
            {users.length}
          </h2>

        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-8">

        <div className="flex items-center bg-gray-100 px-4 py-3 rounded-2xl">

          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-transparent outline-none w-full"
          />

        </div>

      </div>

      {/* USER TABLE */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left py-5 px-6 text-gray-500">
                  Customer
                </th>

                <th className="text-left py-5 px-6 text-gray-500">
                  City
                </th>

                <th className="text-left py-5 px-6 text-gray-500">
                  Interested Car
                </th>

                <th className="text-left py-5 px-6 text-gray-500">
                  Applied Date
                </th>

                <th className="text-left py-5 px-6 text-gray-500">
                  Loan Status
                </th>

                <th className="text-left py-5 px-6 text-gray-500">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50 transition-all"
                >

                  {/* PROFILE */}
                  <td className="py-5 px-6">

                    <div className="flex items-center gap-4">

                      <img
                        src={user.profile}
                        alt={user.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>

                        <h3 className="font-bold text-[#0B2A4A]">
                          {user.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* CITY */}
                  <td className="py-5 px-6 text-gray-600">
                    {user.city}
                  </td>

                  {/* CAR */}
                  <td className="py-5 px-6 text-gray-600">
                    {user.interestedCar}
                  </td>

                  {/* DATE */}
                  <td className="py-5 px-6 text-gray-600">
                    {user.appliedDate}
                  </td>

                  {/* STATUS */}
                  <td className="py-5 px-6">

                    <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
                        user.loanStatus
                      )}`}
                    >

                      {getStatusIcon(user.loanStatus)}

                      {user.loanStatus}

                    </span>

                  </td>

                  {/* ACTION */}
                  <td className="py-5 px-6">

                    <button
                      onClick={() =>
                        setSelectedUser(user)
                      }
                      className="bg-[#0B2A4A] hover:bg-[#123B6B] text-white px-5 py-3 rounded-2xl flex items-center gap-2 transition-all"
                    >

                      <FaEye />

                      View Details

                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* DETAILS MODAL */}
      {selectedUser && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl w-full max-w-3xl p-8 relative overflow-y-auto max-h-[90vh]">

            {/* CLOSE */}
            <button
              onClick={() =>
                setSelectedUser(null)
              }
              className="absolute top-5 right-5 bg-red-100 text-red-600 w-10 h-10 rounded-full"
            >
              ✕
            </button>

            {/* PROFILE */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">

              <img
                src={selectedUser.profile}
                alt={selectedUser.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#27D3C3]"
              />

              <div>

                <h2 className="text-4xl font-bold text-[#0B2A4A]">
                  {selectedUser.name}
                </h2>

                <p className="text-gray-500 mt-2">
                  {selectedUser.city}
                </p>

                <div
                  className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
                    selectedUser.loanStatus
                  )}`}
                >

                  {getStatusIcon(selectedUser.loanStatus)}

                  {selectedUser.loanStatus}

                </div>

              </div>

            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Interested Car
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.interestedCar}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Loan Amount
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.amount}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Assigned Bank
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.bank}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  CIBIL Score
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.cibil}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Occupation
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.occupation}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Monthly Income
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.income}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Mobile Number
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.mobile}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <p className="text-gray-500 text-sm">
                  Address
                </p>

                <h3 className="text-xl font-bold text-[#0B2A4A] mt-2">
                  {selectedUser.address}
                </h3>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default ManageUsers;