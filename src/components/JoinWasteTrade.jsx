import React from 'react';

export default function JoinWasteTrade() {
  return (
    <div className="px-20 py-20 flex flex-col items-center text-center">
      {/* Big central text */}
      <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold mb-12 leading-snug">
        Rejoignez <span className="text-green-700">Linky</span> aujourd'hui et faites partie de l'évolution 
        du commerce mondial des déchets qui fait la différence pour l'environnement et l'économie
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6">
        <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide shadow hover:shadow-lg hover:scale-105 transition transform">
          Acheter
        </button>
        <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide shadow hover:shadow-lg hover:scale-105 transition transform">
          Vendre
        </button>
        <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide shadow hover:shadow-lg hover:scale-105 transition transform">
          Transporter
        </button>
      </div>
    </div>
  );
}
