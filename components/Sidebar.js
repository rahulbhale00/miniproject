"use client";

import Link from "next/link";
import { Home, BarChart, Settings } from "lucide-react";

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`bg-white glass my-2 ml-2 text-black p-5 border-r border-gray-300 shadow-md transition-all duration-300 ${isOpen ? "w-64" : "w-24"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center mb-6">
        <img src="/logo.png" alt="Logo" className={`h-12 w-12 rounded-full transition-all duration-300 ${isOpen ? "block" : "block"}`} />
        <span className={`text-lg font-semibold text-gray-800 ml-2 transition  ${isOpen ? "block" : "hidden"}`}>
          Industrial Fault Monitoring System
        </span>
      </div>

        {/* Navigation Header */}
        {isOpen && <div className="text-sm font-medium text-gray-600 ml-3 mb-2">Navigation</div>}

      {/* Navigation */}
      <nav className={`flex flex-col space-y-2 ${isOpen ? "items-start" : "items-center"}`}>
        <Link href="/" className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition ${isOpen && "w-full"} `}>
          <Home size={20} />
          {isOpen && <span className="">Dashboard</span>}
        </Link>
        <Link
            href="#"
            className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition ${isOpen && "w-full"} `}
          >
            <Settings size={20}  />
            {isOpen && <span className="">Sensors</span>}
          </Link>
        <Link href="/Analytics" className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition ${isOpen && "w-full"} `}>
          <BarChart size={20} />
          {isOpen && <span className="">Analytics</span>}
        </Link>
        <Link href="#" className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-300 transition ${isOpen && "w-full"} `}>
          <Settings size={20} />
          {isOpen && <span className="">Settings</span>}
        </Link>
      </nav>
    </aside>
  );
}
