import React from "react";

// Card Component
const MarketplaceCard = ({ title, items, buttonText, imageSrc }) => {
  return (
    <div className="flex bg-emerald-600  rounded-xl shadow-md overflow-hidden">
      <div className=" bg-emerald-600 text-white p-6    ">
        <h3 className="text-xl font-bold mb-6">{title}</h3>
        <ul className="space-y-1 text-sm mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <button className="bg-white text-emerald-600 px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-50 transition uppercase tracking-wide cursor-pointer">
          {buttonText}
        </button>
      </div>
      <div className="w-3/4">
        <div className=" from-emerald-100 to-emerald-50 rounded-lg h-72 flex items-center justify-end">
          <img
            src={imageSrc}
            alt={`${title} preview`}
            className="h-full w-auto object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default function WasteMarketplace() {
  const cards = [
    {
      title: "Buy Material",
      items: [
        "We match buyers who are fully accredited and certified",
        "All takers are fully vetted to ensure accurate listings",
        "We have access to thousands of waste materials",
      ],
      buttonText: "Buy Material",
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop",
    },
    {
      title: "Sell Material",
      items: [
        "Access our global network of certified recycling facilities",
        "Maximise the value of your waste materials",
        "Recycle your materials ethically with transparency",
      ],
      buttonText: "Sell Material",
      imageSrc:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop",
    },
    {
      title: "Transport Material",
      items: [
        "Access our global network of certified recycling facilities",
        "Maximise the value of your waste materials",
        "Recycle your materials ethically with transparency",
      ],
      buttonText: "Transport Material",
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop",
    },
  ];

  return (
    <div className="w-50% min-h-full  bg-gray-100 rounded-lg  py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description in Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 border-l-4 border-teal-500 pl-6">
          <div className="flex-1">
            <h2 className="text-teal-600 text-xs font-bold mb-3 tracking-widest uppercase">
              Trading Waste Commodities
            </h2>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              The Global Waste Marketplace
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-gray-700 text-sm lg:text-right">
              Linky is a unified online platform that connects waste sellers,
              buyers, and transport providers. It streamlines the entire
              recycling supply chain by helping waste generators find trusted
              buyers, enabling buyers to access verified materials, and allowing
              transporters to secure reliable delivery opportunities.
            </p>
          </div>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <MarketplaceCard
              key={index}
              title={card.title}
              items={card.items}
              buttonText={card.buttonText}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
