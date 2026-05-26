import React, { useState } from "react";
import {
  FaCar,
  FaSearch,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const ManageCars = ({ carFilter }) => {

  const initialCars = [
  {
    id: 1,
    name: "Hyundai Verna",
    type: "Sedan",
    status: "Available",
    price: 1800000,
    addedDate: "12 May 2026",
    addedBy: "Rahul Sharma",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Maruti WagonR",
    type: "Hatchback",
    status: "Sold",
    price: 750000,
    addedDate: "10 May 2026",
    addedBy: "Amit Patil",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Mahindra Thar",
    type: "SUV",
    status: "Available",
    price: 2200000,
    addedDate: "8 May 2026",
    addedBy: "Vikas Jadhav",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Hyundai Creta",
    type: "SUV",
    status: "Sold",
    price: 1900000,
    addedDate: "6 May 2026",
    addedBy: "Sneha Patil",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Tata Nexon",
    type: "SUV",
    status: "Available",
    price: 1500000,
    addedDate: "5 May 2026",
    addedBy: "Rohit Deshmukh",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    name: "Mahindra XUV700",
    type: "SUV",
    status: "Sold",
    price: 2600000,
    addedDate: "3 May 2026",
    addedBy: "Pratik Patil",
    image:
      "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    name: "Hyundai i20",
    type: "Hatchback",
    status: "Available",
    price: 1100000,
    addedDate: "2 May 2026",
    addedBy: "Aditya More",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    name: "Mahindra Scorpio",
    type: "SUV",
    status: "Sold",
    price: 2400000,
    addedDate: "1 May 2026",
    addedBy: "Kunal Jagtap",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
  },
];

  const [cars, setCars] = useState(initialCars);

  const [search, setSearch] = useState("");

  const [typeFilter, setTypeFilter] =
    useState("");

  const [sortOrder, setSortOrder] =
    useState("");

  // ================= DELETE =================

  const handleDelete = (id) => {

    const updatedCars = cars.filter(
      (car) => car.id !== id
    );

    setCars(updatedCars);
  };

  // ================= EDIT =================

  const handleEdit = (car) => {

    alert(`Edit ${car.name}`);
  };

  // ================= ADD =================

  const handleAddCar = () => {

    alert("Add Car Button Clicked");
  };

  // ================= FILTER =================

  let filteredCars = cars.filter((car) =>
    car.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (carFilter) {

  filteredCars = filteredCars.filter(
    (car) => car.status === carFilter
  );
}

  // ================= SORT =================

  if (sortOrder === "low") {

    filteredCars.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOrder === "high") {

    filteredCars.sort(
      (a, b) => b.price - a.price
    );
  }

  return (

    <div className="p-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <h2 className="text-3xl font-bold text-[#0B2A4A]">
            Manage Cars
          </h2>

          <p className="text-gray-500 mt-1">
            Add, edit and manage all cars
          </p>
        </div>

        <button
          onClick={handleAddCar}
          className="bg-[#0B2A4A] hover:bg-[#123B6B] text-white px-6 py-3 rounded-2xl flex items-center gap-3 transition-all"
        >

          <FaPlus />

          Add Car

        </button>

      </div>

      {/* FILTERS */}
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* SEARCH */}
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-2xl">

            <FaSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="bg-transparent outline-none w-full"
            />

          </div>

          {/* FILTER */}
          <select
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value)
            }
            className="bg-gray-100 px-4 py-3 rounded-2xl outline-none"
          >

            <option value="">
              Filter By Type
            </option>

            <option value="SUV">
              SUV
            </option>

            <option value="Sedan">
              Sedan
            </option>

            <option value="Hatchback">
              Hatchback
            </option>

          </select>

          {/* SORT */}
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value)
            }
            className="bg-gray-100 px-4 py-3 rounded-2xl outline-none"
          >

            <option value="">
              Sort By Price
            </option>

            <option value="low">
              Low to High
            </option>

            <option value="high">
              High to Low
            </option>

          </select>

        </div>

      </div>

      {/* CAR GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">

        {filteredCars.map((car) => (

          <div
            key={car.id}
            className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
          >

            {/* IMAGE */}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex items-start justify-between gap-2">

  <div>
    <h3 className="text-lg font-bold text-[#0B2A4A]">
      {car.name}
    </h3>

    <div className="flex gap-2 mt-2">

      <span className="bg-[#27D3C3]/20 text-[#0B2A4A] text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">
        {car.type}
      </span>

      <span
        className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap
        ${
          car.status === "Sold"
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {car.status}
      </span>

    </div>
  </div>

</div>

              <h2 className="text-2xl font-bold text-[#27D3C3] mt-4">

                ₹{car.price.toLocaleString()}

              </h2>

              <div className="mt-5 space-y-2 text-sm text-gray-500">

                <p>

                  <span className="font-semibold text-[#0B2A4A]">
                    Added On:
                  </span>{" "}

                  {car.addedDate}

                </p>

                <p>

                  <span className="font-semibold text-[#0B2A4A]">
                    Added By:
                  </span>{" "}

                  {car.addedBy}

                </p>

              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={() =>
                    handleEdit(car)
                  }
                  className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all"
                >

                  <FaEdit />

                  Edit

                </button>

                <button
                  onClick={() =>
                    handleDelete(car.id)
                  }
                  className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all"
                >

                  <FaTrash />

                  Delete

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* EMPTY */}
      {filteredCars.length === 0 && (

        <div className="bg-white rounded-3xl p-10 text-center mt-8 border border-gray-100">

          <FaCar className="text-5xl mx-auto text-gray-300 mb-4" />

          <h3 className="text-2xl font-bold text-[#0B2A4A]">
            No Cars Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try changing filters or search
          </p>

        </div>
      )}

    </div>
  );
};

export default ManageCars;