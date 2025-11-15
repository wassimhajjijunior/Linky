import React, { useState } from "react";
import {
  ChevronRight,
  User,
  CheckCircle,
  Package,
  Weight,
  MapPin,
  FileText,
  ArrowLeft,
  Tag,
  Calendar,
  Hourglass
} from "lucide-react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Marker icon for Leaflet
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Sample transporters list
const transporters = [
  { id: "T001", name: "Ali Trabelsi", phone: "+216 98 123 456", vehicle: "Truck 10 MT", available: true },
  { id: "T002", name: "Sami Ben Amor", phone: "+216 97 654 321", vehicle: "Van 5 MT", available: false },
  { id: "T003", name: "Nadia Kooli", phone: "+216 95 789 012", vehicle: "Truck 8 MT", available: true },
];

export default function MaterialDetail({ material, onBack }) {
  const defaultMaterial = {
    title: "Plastic-LDPE",
    breadcrumb: ["Back to Materials", "Plastic-LDPE"],
    images: [
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNs8DWC07GnRNKefrPWMtWBQksvSaq2_yRLA&s"
    ],
    status: "Ongoing Availability",
    seller: {
      name: "Mohamed Ben Ali",
      verified: true,
      id: "TN123456",
      latitude: 36.8065,
      longitude: 10.1815,
    },
    listingId: "60841",
    listedDate: "14th Nov 2025",
    materialName: "LDPE Jazz",
    quantityAvailable: "100 MT",
    numberOfLoads: "5",
    remainingLoads: "5",
    averageWeight: "20 MT",
    location: "Tunis, Tunisia",
    description: "LDPE Jazz - ongoing supply of high-quality LDPE material suitable for packaging and recycling purposes."
  };

  const data = defaultMaterial;

  // State for carousel
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = data.images?.length || 0;

  const prevImage = () => setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % totalImages);

  return (
    <div className="min-h-screen mt-20 bg-gray-50 py-8 px-4">
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Materials
      </button>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left side - image */}
        <div className="md:col-span-2 relative">
          <img
            src={data.images?.[currentImage]}
            alt={data.title || "Material Image"}
            className="w-full h-96 object-cover rounded-2xl border border-gray-200"
          />
          {totalImages > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                &lt;
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                &gt;
              </button>
            </>
          )}
        </div>

        {/* Right side - status & seller card */}
        <div className="bg-white border border-emerald-400 rounded-xl p-6 flex flex-col gap-4 h-fit">
          {/* Status badge */}
          <div className="flex items-center gap-2 text-emerald-700 border border-emerald-400 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="font-medium text-sm">{data.status || "-"}</span>
          </div>

          {/* Seller info */}
          <div className="flex flex-col gap-2 text-gray-800">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-600" />
              <span className="font-semibold">Seller: {data.seller?.name || "-"}</span>
            </div>
            {data.seller?.verified && (
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold text-sm">Account Verified</span>
              </div>
            )}
            <p>Listing ID: <span className="font-semibold">{data.listingId || "-"}</span></p>
            <p>Listed on: <span className="font-semibold">{data.listedDate || "-"}</span></p>
          </div>
        </div>
      </div>

      {/* Material Description */}
      <div className="mt-8 bg-white border border-emerald-400 rounded-xl overflow-hidden">
        <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-200 font-semibold text-gray-900">
          Material description
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-y-4 gap-x-10">
          <DetailItem icon={Package} label="Material" value={data.materialName} />
          <DetailItem icon={Tag} label="Quantity Available" value={data.quantityAvailable} />
          <DetailItem icon={Package} label="No. of Loads" value={data.numberOfLoads} />
          <DetailItem icon={Hourglass} label="Remaining Loads" value={data.remainingLoads} />
          <DetailItem icon={Weight} label="Average Weight per Load" value={data.averageWeight} />
          <DetailItem icon={MapPin} label="Material Location" value={data.location} />
          <DetailItem icon={FileText} label="Description" value={data.description} long />
        </div>

        <div className="px-6 pb-6">
          <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg text-lg transition">
            BUY
          </button>
        </div>

        {/* Seller Location Map */}
        <div className="px-6 pb-6">
          <p className="text-gray-600 font-semibold mb-2">Seller Location</p>
          <MapContainer
            center={[data.seller.latitude, data.seller.longitude]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-48 rounded-xl border border-gray-200"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[data.seller.latitude, data.seller.longitude]} icon={markerIcon}>
              <Popup>
                {data.seller.name} - {data.location}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Transporters List */}
      <div className="mt-8 bg-white border border-emerald-400 rounded-xl overflow-hidden">
        <div className="bg-emerald-50 px-6 py-3 border-b border-emerald-200 font-semibold text-gray-900">
          Transporters
        </div>
        <div className="p-6 grid md:grid-cols-3 gap-6">
          {transporters.map((t) => (
            <TransporterCard key={t.id} transporter={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon: Icon, label, value, long }) {
  return (
    <div className={`${long ? "md:col-span-2" : ""} flex items-start gap-3`}>
      <Icon className="w-5 h-5 text-emerald-600 mt-0.5" />
      <div>
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="font-semibold text-gray-900">{value || "-"}</p>
      </div>
    </div>
  );
}

function TransporterCard({ transporter }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-900">{transporter.name}</span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            transporter.available ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
          }`}
        >
          {transporter.available ? "Available" : "Unavailable"}
        </span>
      </div>
      <p className="text-gray-600 text-sm">Phone: {transporter.phone}</p>
      <p className="text-gray-600 text-sm">Vehicle: {transporter.vehicle}</p>
    </div>
  );
}
