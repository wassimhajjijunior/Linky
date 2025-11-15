import React, { useState } from 'react';
import { Recycle } from 'lucide-react';

export default function WasteTradeMaterials() {
  const [activeMaterial, setActiveMaterial] = useState(0);
  
  const materials = [
    'PET',
    'HDPE',
    'PVC',
    'LDPE',
    'PP',
    'PS',
    'PC',
    'ABS',
    'EPS'
  ];
  
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Matériaux WasteTrade.{' '}
            <span className="text-emerald-600">Vendez vos matériaux avec nous.</span>
          </h2>
        </div>

        {/* Recycling Icons Row */}
        <div className="flex justify-center items-center gap-4 mb-16 flex-wrap">
          {materials.map((material, index) => (
            <button
              key={index}
              onClick={() => setActiveMaterial(index)}
              className="flex flex-col items-center gap-2 group transition-all"
            >
              <div
                className={`${
                  index === activeMaterial
                    ? 'w-14 h-14 bg-emerald-600 rounded-2xl'
                    : 'w-14 h-14 border-2 border-emerald-600 rounded-full hover:bg-emerald-50'
                } flex items-center justify-center transition-all`}
              >
                <Recycle
                  className={`w-7 h-7 ${index === activeMaterial ? 'text-white' : 'text-emerald-600'}`}
                />
              </div>
              <span className={`text-xs font-semibold ${
                index === activeMaterial ? 'text-emerald-600' : 'text-gray-600'
              }`}>
                {material}
              </span>
            </button>
          ))}
        </div>

        {/* PET Recycling Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Recyclage du PET
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">PET</span> - Le PET est l'abréviation de Polyéthylène Téréphtalate, qui se forme lorsque le glycol et l’acide téréphtalique sont combinés. C’est un plastique transparent à la fois solide et léger, largement utilisé pour les emballages alimentaires et les boissons, la majorité des bouteilles plastiques à usage unique étant fabriquées à partir de PET. Il est également populaire pour une grande variété d’autres produits, tels que les bouteilles pour produits d’hygiène et même les boîtes de balles de tennis.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              EN SAVOIR PLUS SUR LE PET
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&h=400&fit=crop"
              alt="Bouteilles PET compressées"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Trade Waste Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop"
              alt="Tas de matériaux de déchets"
              className="w-full h-80 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Échangez vos déchets en toute confiance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Notre plateforme apporte transparence et confiance dans le commerce des déchets.
              Avec WasteTrade, vous pouvez échanger vos matériaux de déchets de manière sécurisée,
              tout en réduisant les risques, en garantissant la conformité réglementaire
              et en prenant des décisions éclairées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
