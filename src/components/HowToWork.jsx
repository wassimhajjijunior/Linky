import React from 'react';
import { Users, ShoppingCart, Package, ShieldCheck } from 'lucide-react';

export default function HowToWork() {
  const steps = [
    { title: "Browse Materials", icon: ShoppingCart },
    { title: "List a Product", icon: Package },
    { title: "Full Transactional Coverage", icon: ShieldCheck },
  ];

  return (
    <div className="bg-gray-700  py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Titles */}
          <h3 className="text-green-900 font-bold text-lg uppercase tracking-wide">
            Connecting Buyers and Sellers
          </h3>
          <h2 className="text-4xl font-bold text-gray-900">
            How it Works
          </h2>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <button
                key={index}
                className="flex items-center gap-3 bg-white border border-green-200 shadow hover:shadow-lg hover:bg-green-100 transition px-5 py-3 rounded-lg font-semibold text-green-900 text-left"
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
