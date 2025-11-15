import CircularEconomy from "./components/CircularEconomy.jsx";
import Header from "./components/Header.jsx";
import HowToWork from "./components/HowToWork.jsx";
import JoinWasteTrade from "./components/JoinWasteTrade.jsx";
import WasteMarketplace from "./components/WasteMarketplace.jsx";
import WasteTradeMaterials from "./components/WasteTradeMaterials.jsx";
import Footer from "./components/Footer.jsx";
import MarketplaceSection from "./components/MarketplaceSection.jsx";
import MaterialDetail from "./components/MaterialDetail.jsx";

import { useState } from "react";

function App() {
  const [showMarketplace, setShowMarketplace] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onMarketplaceClick={() => setShowMarketplace(true)} />

      {/* 1️⃣ If a material is selected: ONLY show MaterialDetail */}
      {selectedMaterial && (
        <MaterialDetail
          material={selectedMaterial}
          onBack={() => setSelectedMaterial(null)}
        />
      )}

      {/* 2️⃣ If no material is selected but marketplace is open */}
      {!selectedMaterial && showMarketplace && (
        <MarketplaceSection
          onClose={() => setShowMarketplace(false)}
          onViewDetails={(item) => setSelectedMaterial(item)}
        />
      )}

      {/* 3️⃣ If neither are open → show homepage */}
      {!selectedMaterial && !showMarketplace && (
        <>
          <div className="w-full pt-32 mb-10 overflow-auto">
            <WasteMarketplace />
          </div>

          <CircularEconomy />
          <HowToWork />
          <WasteTradeMaterials />
          <JoinWasteTrade />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
