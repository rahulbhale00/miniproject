"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 pl-15 flex items-center justify-between">
      {/* Center - Navigation Links */}
      <div className="space-x-6">
        <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
        <Link href="/sensors" className="text-gray-700 hover:text-blue-600">
          Sensors
        </Link>
        <Link href="/settings" className="text-gray-700 hover:text-blue-600">
          Settings
        </Link>
      </div>

      {/* Right - Login Button */}
      <Link href="/login">
        <div className="h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-600">
          🔒
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
