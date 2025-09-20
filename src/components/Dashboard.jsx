import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // ✅ useLocation
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Dashboard() {
  const location = useLocation(); // ✅ get current route

  const hideFooterPaths = ["/MediBot","/AboutMed"];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md fixed h-full">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Navbar */}
        <div className="fixed top-0 left-64 right-0 z-10 bg-white">
          <Navbar />
        </div>

        {/* Scrollable content with Outlet */}
        <div className="flex-1 mt-16 overflow-y-auto bg-gray-50">
          <Outlet />

          {/* Floating Button */}
          <button className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700">
            <Link to="MediBot" >Consult with AI Doctor</Link>
          </button>

          {/* Footer will only show if NOT on chatbot route */}
          {!hideFooterPaths.includes(location.pathname) && (
            <div className="p-6 bg-blue-50">
              <Footer />
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
