import React from "react";

// Card Component
const MarketplaceCard = ({ title, items, buttonText, imageSrc }) => {
  return (
    <div className="flex bg-emerald-600 rounded-xl shadow-md overflow-hidden">
      <div className="bg-emerald-600 text-white p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-6">{title}</h3>
          <ul className="space-y-1 text-sm mb-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-white text-emerald-600 px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-50 transition uppercase tracking-wide cursor-pointer self-start">
          {buttonText}
        </button>
      </div>

      <div className="w-3/4">
        <div className="rounded-lg h-72 flex items-center justify-end">
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
      title: "Acheter du Matériel",
      items: [
        "Nous mettons en relation des acheteurs entièrement accrédités et certifiés",
        "Tous les preneurs sont vérifiés pour garantir des annonces exactes",
        
      ],
      buttonText: "Acheter",
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop",
    },
    {
      title: "Vendre du Matériel",
      items: [
        "Accédez à notre réseau mondial d'installations de recyclage certifiées",
        "Maximisez la valeur de vos matériaux recyclables",
      ],
      buttonText: "Vendre",
      imageSrc:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop",
    },
    {
      title: "Transporter du Matériel",
      items: [
        "Accédez à notre réseau mondial d'installations de recyclage certifiées",
        "Maximisez la valeur de vos matériaux recyclables",
      ],
      buttonText: "Transporter",
      imageSrc:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop",
    },
  ];

  return (
    <div className="w-50% min-h-full bg-gray-100 rounded-lg py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title and Description in Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 border-l-4 border-teal-500 pl-6">
          <div className="flex-1">
            <h2 className="text-teal-600 text-md font-bold mb-3 tracking-widest uppercase">
              Commerce des Déchets
            </h2>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-700">
              Le Marché Mondial des Déchets
            </h1>
          </div>
          <div className="flex-1 lg:max-w-md">
            <p className="text-gray-700 font-medium text-[14px] lg:text-left">
              Linky est une plateforme en ligne unifiée qui connecte les vendeurs,
              acheteurs et transporteurs de déchets. Elle rationalise l'ensemble
              de la chaîne de recyclage en aidant les producteurs de déchets à
              trouver des acheteurs fiables, permettant aux acheteurs d'accéder
              à des matériaux vérifiés et offrant aux transporteurs des
              opportunités de livraison fiables.
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
