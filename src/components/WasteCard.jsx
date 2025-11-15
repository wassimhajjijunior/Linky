import React from "react";

export default function WasteCard({ image, name, country, price, badge }) {
  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      {/* Image section */}
      <div className="relative w-40 md:w-48 shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {badge && (
          <span className="absolute top-2 left-2 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      {/* Right section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{country}</p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-emerald-700 font-bold text-lg">{price} / ton</span>
          <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
