import React from "react";
import TopBar from "../atoms/TopBar";
import Sidebar from "../atoms/SideBar";

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Top Navigation Bar */}
      <TopBar username="Fauzan Gantenk" profile="" />

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-6 overflow-auto">
          {/* Welcome Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome to <span className="text-[#18D2C0]">ETH</span>
              <span className="text-[#F44336]">EALTH</span>!
            </h2>
            <p className="text-sm text-gray-500">
              Hospital Decentralized Medical Center
            </p>
          </div>
          {/* Balance and Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white shadow rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-700">Balance</p>
              <h3 className="text-2xl font-bold text-blue-600">Rp 10.241,98</h3>
            </div>
            <div className="bg-white shadow rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-700">
                Patient Statistic
              </p>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 text-sm bg-green-200 rounded-full text-black">
                  Monthly
                </button>
                <button className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-500">
                  Weekly
                </button>
                <button className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-500">
                  Today
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-red-100 p-4 rounded-xl">
              <p className="text-sm font-semibold text-gray-700">
                Total Patient
              </p>
              <h3 className="text-2xl font-bold text-red-600">5</h3>
            </div>
            <div className="bg-green-100 p-4 rounded-xl">
              <p className="text-sm font-semibold text-gray-700">Doctor</p>
              <h3 className="text-2xl font-bold text-green-600">4</h3>
            </div>
            <div className="bg-blue-100 p-4 rounded-xl">
              <p className="text-sm font-semibold text-gray-700">Appointment</p>
              <h3 className="text-2xl font-bold text-blue-600">6</h3>
            </div>
            <div className="bg-purple-100 p-4 rounded-xl">
              <p className="text-sm font-semibold text-gray-700">
                Notifications
              </p>
              <h3 className="text-2xl font-bold text-purple-600">48</h3>
            </div>
          </div>

          {/* History, Doctor, Appointment, Reminder */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="bg-white shadow rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">History</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Consultation with Dr. John - 10 May</li>
                  <li>Medicine bought - 11 May</li>
                  <li>Follow-up scheduled - 15 May</li>
                </ul>
              </div>

              <div className="bg-white shadow rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Your Doctor
                </h4>
                <p className="text-sm text-gray-600">
                  Dr. Emily Johnson - Pediatrics
                </p>
              </div>

              <div className="bg-white shadow rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Upcoming Appointment
                </h4>
                <p className="text-sm text-gray-600">
                  17 May 2025 - 14:00 with Dr. Emily Johnson
                </p>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Reminders</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Take medicine: Paracetamol - 10:00 AM</li>
                <li>Check-up tomorrow</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
