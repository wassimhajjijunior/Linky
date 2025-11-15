import React from "react";

export default function WasteCard({ image, name, country, price, category , onViewDetails }) {
  return (
    <div className="bg-white w-120 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col md:flex-row">
      {/* Image section */}
      <div className="relative w-full md:w-40 h-40 md:h-auto shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {category}
          </span>
        )}
      </div>

      {/* Content section */}
      <div className=" p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm md:text-base text-gray-500 mt-1">{country}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-emerald-700 font-bold text-lg md:text-xl">{price} / ton</span>
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
          onClick={onViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
