import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import WasteCard from "./WasteCard.jsx"; // your card component

export default function MarketplaceSection() {
  const wasteItems = [
    { id: 1, name: "Plastic PET Bottles", category: "Plastic", price: 120, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.8065, 10.1815] },
    { id: 2, name: "HDPE Plastic", category: "Plastic", price: 150, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [35.8245, 10.6346] },
    { id: 3, name: "Metal Scrap", category: "Metal", price: 200, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.8008, 10.1875] },
    { id: 4, name: "Glass Bottles", category: "Glass", price: 100, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.6923, 10.1019] },
    { id: 5, name: "Paper Sheets", category: "Paper", price: 80, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.7373, 10.0996] },
    { id: 6, name: "Cardboard Boxes", category: "Paper", price: 90, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.8050, 10.1500] },
    { id: 7, name: "Aluminum Cans", category: "Metal", price: 180, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [35.8250, 10.6400] },
    { id: 8, name: "Glass Jars", category: "Glass", price: 110, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.8080, 10.1700] },
    { id: 9, name: "PET Caps", category: "Plastic", price: 130, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.7000, 10.1000] },
    { id: 10, name: "Old Newspapers", category: "Paper", price: 70, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.7400, 10.1200] },
    { id: 11, name: "Copper Wires", category: "Metal", price: 220, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.8065, 10.1900] },
    { id: 12, name: "Plastic Bags", category: "Plastic", price: 50, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [35.8230, 10.6300] },
    { id: 13, name: "Broken Glass", category: "Glass", price: 90, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.8080, 10.1800] },
    { id: 14, name: "Magazines", category: "Paper", price: 75, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.7350, 10.1100] },
    { id: 15, name: "Steel Pipes", category: "Metal", price: 250, country: "Tunisia", image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop", location: [36.6950, 10.1050] },
  ];

  const [filters, setFilters] = useState({ type: "", minPrice: "", maxPrice: "" });

  const filteredItems = wasteItems.filter((item) => {
    const matchesType = filters.type ? item.name.toLowerCase().includes(filters.type.toLowerCase()) : true;
    const matchesMinPrice = filters.minPrice ? item.price >= filters.minPrice : true;
    const matchesMaxPrice = filters.maxPrice ? item.price <= filters.maxPrice : true;
    return matchesType && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <section className="py-24 bg-gray-100">
      {/* Filters */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <input
          type="text"
          placeholder="Waste type"
          className="border rounded px-3 py-2"
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min price"
          className="border rounded px-3 py-2"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max price"
          className="border rounded px-3 py-2"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto px-4">
        {/* Waste Cards */}
        <div className="flex-1 space-y-4">
          {filteredItems.map((item) => (
            <WasteCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              country={item.country}
            />
          ))}
        </div>

        {/* Map with Marker Clustering */}
        <div className="flex-1 h-[500px] rounded-xl overflow-hidden">
          <MapContainer center={[36.8, 10.2]} zoom={6} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            <MarkerClusterGroup>
              {filteredItems.map((item) => (
                <Marker key={item.id} position={item.location}>
                  <Popup>
                    <strong>{item.name}</strong>
                    <br />
                    ${item.price} - {item.country}
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
