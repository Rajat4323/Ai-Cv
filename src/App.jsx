import React, { useState } from "react";
import {FaBars,FaSearch,FaListAlt,FaHistory,FaUser,FaCog,FaSignOutAlt} from "react-icons/fa";
import ShortlistedCV from "./components/ShortlistedCV";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("shortlistedCV");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static bg-white shadow-md h-full w-64 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center">
          <img src="/Logo.png" alt="Logo" className="w-[60px] h-[50px] mt-4 ml-4" />
          <h1 className="text-xl font-bold text-[#005DFF] p-4 mt-2">AI CV</h1>
        </div>
        <nav className="space-y-4 p-4 mt-10">
          <button
            className="flex items-center space-x-2 w-full text-left p-2 rounded-lg text-gray-600 hover:text-blue-500 font-semibold"
          >
            <FaSearch />
            <span>Search CV</span>
          </button>
          <button
            onClick={() => setActivePage("shortlistedCV")}
            className={`flex items-center space-x-2 w-full text-left p-2 font-semibold rounded-lg ${
              activePage === "shortlistedCV"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            <FaListAlt />
            <span>Shortlisted CV</span>
          </button>
          <button
            onClick={() => setActivePage("transactionHistory")}
            className={`flex items-center space-x-2 w-full text-left p-2 font-semibold rounded-lg ${
              activePage === "transactionHistory"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            <FaHistory />
            <span>Transaction History</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left p-2 font-semibold rounded-lg text-gray-600 hover:text-blue-500"
          >
            <FaHistory />
            <span>Search History</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left p-2 font-semibold rounded-lg text-gray-600 hover:text-blue-500"
          >
            <FaUser />
            <span>Profile</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left p-2 font-semibold rounded-lg text-gray-600 hover:text-blue-500"
          >
            <FaCog />
            <span>Settings</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full text-left p-2 font-semibold rounded-lg text-gray-600 hover:text-blue-500"
          >
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Header for Mobile */}
        <header className="fixed top-0 left-0 right-0 bg-blue-500 text-white flex items-center justify-between p-4 z-50 lg:hidden">
          <button onClick={toggleSidebar} className="text-2xl">
            <FaBars />
          </button>
          <h1 className="text-xl font-bold">AI CV</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100 pt-[64px]">
          {activePage === "shortlistedCV" && <ShortlistedCV />}
          {activePage === "transactionHistory" && <TransactionHistory />}
        </main>
      </div>

      {/* Overlay for Sidebar on Mobile */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default App;
