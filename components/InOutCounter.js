"use client";

import { useEffect, useState } from "react";

const InOutCounter = () => {
  const [inCount, setInCount] = useState(0);
  const [outCount, setOutCount] = useState(0);
  const [totalInside, setTotalInside] = useState(0);
  const [inPosition, setInPosition] = useState("100%");
  const [outPosition, setOutPosition] = useState("0%");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/serial_fake");
        const result = await res.json();

        setInCount(result.in || 0);
        setOutCount(result.out || 0);
        setTotalInside(result.totalInside || 0);

        // Animate IN (circle moves up)
        setInPosition(`${100 - Math.min(result.in, 100)}%`);

        // Animate OUT (circle moves down)
        setOutPosition(`${Math.min(result.out, 100)}%`);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const interval = setInterval(fetchData, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex glass flex-col items-center justify-center w-[100%] h-[100%] bg-gray-100 shadow-lg rounded-lg p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">IN/OUT Counter</h1>

      {/* IN & OUT Labels */}
      <div className="flex w-[70%] justify-between px-10 text-2xl font-bold">
        <span className="text-green-800">IN: {inCount}</span>
        <span className="text-red-800">OUT: {outCount}</span>
      </div>

      {/* IN & OUT Rectangles */}
      <div className="flex w-[70%] h-[50%] border-4 border-gray-600 rounded-lg overflow-hidden mt-4">
        {/* IN Rectangle */}
        <div className="relative flex-1 bg-green-200 flex items-center justify-center border-r-4 border-gray-600">
          <div
            className="absolute w-10 h-10 bg-green-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ bottom: inPosition }}
          ></div>
        </div>

        {/* OUT Rectangle */}
        <div className="relative flex-1 bg-red-200 flex items-center justify-center">
          <div
            className="absolute w-10 h-10 bg-red-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ top: outPosition }}
          ></div>
        </div>
      </div>

      {/* Total Inside Count */}
      <div className="mt-6 text-2xl font-bold text-gray-800">
        Total Inside: <span className="text-blue-600">{totalInside}</span>
      </div>
    </div>
  );
};

export default InOutCounter;
