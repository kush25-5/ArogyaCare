import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet for dynamic content
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - fixed, can include NavLinks for routing */}
      <div className="w-64 bg-white shadow-md fixed h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar - fixed at top */}
        <div className="fixed top-0 left-64 right-0 z-10 bg-white">
          <Navbar />
        </div>

        {/* Scrollable content with Outlet for routes */}
        <div className="flex-1 mt-16 overflow-y-auto bg-gray-50">
          <Outlet /> {/* This will render Frontpage, Medbot, etc., based on the route */}

          {/* Footer at the bottom */}
          <div className="p-6 bg-blue-50">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
