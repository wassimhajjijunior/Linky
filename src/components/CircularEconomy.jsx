import React from 'react';
import { Leaf, DollarSign, CheckCircle, Shield, User } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, position }) => {
  return (
    <div
      className={`flex items-start gap-4 p-6 rounded-xl shadow-lg bg-emerald-700 hover:shadow-xl transition transform hover:-translate-y-1 ${
        position === 'right' ? 'flex-row-reverse text-right' : ''
      }`}
    >
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-full bg-emerald-800 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-emerald-100 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function CircularEconomy() {
  const leftFeatures = [
    {
      icon: Leaf,
      title: "Réduction du Carbone",
      description:
        "Linky aide à réduire les émissions liées aux déchets en favorisant l'approvisionnement local et un acheminement plus intelligent entre acheteurs, vendeurs et transporteurs."
    },
    {
      icon: CheckCircle,
      title: "Confiance & Fiabilité",
      description:
        "Linky connecte des vendeurs, acheteurs et transporteurs vérifiés, garantissant un marché sécurisé et transparent."
    },
    {
      icon: Shield,
      title: "Conformité",
      description:
        "Linky automatise la documentation, vous tient informé des réglementations et veille à ce que toutes les transactions respectent les règles régionales."
    }
  ];

  const rightFeatures = [
    {
      icon: DollarSign,
      title: "Rentabilité",
      description:
        "Linky aide les vendeurs à trouver les meilleures offres et les acheteurs à obtenir les meilleurs prix, tout en gardant les coûts de transport optimisés."
    },
    {
      icon: User,
      title: "Accompagnement Personnalisé",
      description:
        "Linky guide les utilisateurs étape par étape dans la publication, l'achat et le transport de matériaux avec une expérience fluide et intuitive."
    }
  ];

  return (
    <div className="bg-green-700 from-emerald-800 to-emerald-700 py-10 px-4 overflow-y-auto rounded-t-2xl ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-16">
          Économie Circulaire
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col space-y-12">
            {leftFeatures.map((feature, i) => (
              <FeatureCard key={i} {...feature} position="left" />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col space-y-12">
            {rightFeatures.map((feature, i) => (
              <FeatureCard key={i} {...feature} position="right" />
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
          <button className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold uppercase tracking-wide shadow hover:shadow-lg hover:scale-105 transition transform">
            Acheter des Matériaux
          </button>
          <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wide shadow hover:shadow-lg hover:scale-105 transition transform">
            Voir les Matériaux Demandés
          </button>
        </div>
      </div>
    </div>
  );
}
