import React from "react";
import {
  ChevronRight,
  User,
  CheckCircle,
  Package,
  Weight,
  MapPin,
  FileText,
} from "lucide-react";

export default function MaterialDetail({ material, onBack }) {
  const defaultMaterial = {
    title: "Plastic-LDPE",
    breadcrumb: ["Back to Materials", "Plastic-LDPE"],
    image:
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=600&fit=crop",
    status: "Ongoing Availability",
    seller: "85377k",
    verified: true,
    listingId: "80841",
    listedDate: "14th Nov 2025",
    materialName: "LDPE Jazz",
    quantityAvailable: "100 MT",
    numberOfLoads: "5",
    remainingLoads: "5",
    averageWeight: "20 MT",
    location: "United Kingdom",
    description: "LDPE Jazz - ongoing supply",
  };

  const data = material || defaultMaterial;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-emerald-600 hover:text-emerald-700 font-medium mb-4"
      >
        ← Back to Materials
      </button>

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-5">
          <button className="text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer">
            {data.breadcrumb?.[0] || "Back to Materials"}
          </button>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700 font-semibold">
            {data.breadcrumb?.[1] || data.title}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{data.title}</h1>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Image */}
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Status / Seller Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 p-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="font-medium text-sm">{data.status}</span>
            </div>

            <div className="space-y-4">
              {/* Seller */}
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-xs text-gray-500">Seller</p>
                  <p className="font-semibold text-gray-900">
                    {data.seller || "Unknown"}
                  </p>
                </div>
              </div>

              {/* Verification */}
              {data.verified && (
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle className="w-5 h-5" />
                  <p className="font-semibold text-sm">Account Verified</p>
                </div>
              )}

              {/* Info */}
              <div className="pt-3 border-t border-gray-200 text-sm">
                <p className="text-gray-600">
                  Listing ID:{" "}
                  <span className="font-medium text-gray-900">
                    {data.listingId}
                  </span>
                </p>
                <p className="text-gray-600 mt-1">
                  Listed on:{" "}
                  <span className="font-medium text-gray-900">
                    {data.listedDate}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Material Description */}
        <div className="mt-10 bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100">
            <h2 className="text-lg font-bold text-gray-900">
              Material Description
            </h2>
          </div>

          {/* Details */}
          <div className="p-6 grid md:grid-cols-2 gap-x-10 gap-y-8">
            <DetailItem icon={Package} label="Material" value={data.materialName} />
            <DetailItem
              icon={Package}
              label="Quantity Available"
              value={data.quantityAvailable}
            />

            <DetailItem icon={Package} label="No. of Loads" value={data.numberOfLoads} />
            <DetailItem
              icon={Package}
              label="Remaining Loads"
              value={data.remainingLoads}
            />

            <DetailItem icon={Weight} label="Average Weight" value={data.averageWeight} />
            <DetailItem icon={MapPin} label="Location" value={data.location} />

            <DetailItem
              icon={FileText}
              label="Description"
              value={data.description}
              long
            />
          </div>

          {/* Button */}
          <div className="px-6 pb-6">
            <button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl text-lg transition">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Reusable Detail Item Component --- */
function DetailItem({ icon: Icon, label, value, long }) {
  return (
    <div className={`${long ? "md:col-span-2" : ""} flex items-start gap-3`}>
      <Icon className="w-5 h-5 text-emerald-600 mt-0.5" />
      <div>
        <p className="text-xs text-gray-500 mb-1">{label}</p>
        <p className="text-base font-semibold text-gray-900 leading-snug">
          {value}
        </p>
      </div>
    </div>
  );
}
