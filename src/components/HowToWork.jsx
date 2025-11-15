import React from 'react';
import { Users, ShoppingCart, Package, ShieldCheck } from 'lucide-react';

export default function HowToWork() {
  const steps = [
    { title: "Parcourir les Matériaux", icon: ShoppingCart },
    { title: "Lister un Produit", icon: Package },
    { title: "Couverture Complète des Transactions", icon: ShieldCheck },
  ];

  return (
    <div
      className="relative py-16 px-4 bg-gray-900"
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8 text-white">
          {/* Titles */}
          <h3 className="text-green-200 font-bold text-lg uppercase tracking-wide">
            Connexion Acheteurs et Vendeurs
          </h3>
          <h2 className="text-4xl font-bold">
            Comment ça marche
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <button
                key={index}
                className="flex items-center gap-3 bg-white/90 border border-green-200 shadow hover:shadow-lg hover:bg-white transition px-5 py-3 rounded-lg font-semibold text-green-900 text-left"
              >
                <step.icon className="w-6 h-6 text-green-700" />
                <span>{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
