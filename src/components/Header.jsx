import { useState } from "react";
import { Globe, Leaf, Menu, X } from "lucide-react";

export default function Header() {
  const [language, setLanguage] = useState("FR");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-center ">
        
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Leaf className="text-emerald-700" size={36} />
          <h1 className="text-3xl font-bold text-emerald-800 tracking-tight">
            Linky
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          <button className="text-lg font-semibold text-gray-800 hover:text-emerald-600 transition">
            Marché
          </button>
          <button className="text-lg font-semibold text-gray-800 hover:text-emerald-600 transition">
            À propos
          </button>
        </div>

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-lg font-semibold shadow hover:bg-emerald-800 transition">
            Connexion
          </button>

          <button className="px-5 py-2.5 rounded-xl border border-emerald-700 text-emerald-800 text-lg font-semibold hover:bg-emerald-700 hover:text-white transition">
            Inscription
          </button>

          {/* Language Selector */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl border">
            <Globe size={20} className="text-emerald-700" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-emerald-800 font-medium text-lg"
            >
              <option value="FR">🇫🇷 Français</option>
              <option value="EN">🇬🇧 Anglais</option>
              <option value="AR">🇹🇳 عربي</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4">
          <button className="text-lg font-semibold text-gray-800 hover:text-emerald-600 transition">
            Marché
          </button>
          <button className="text-lg font-semibold text-gray-800 hover:text-emerald-600 transition">
            À propos
          </button>

          <button className="px-5 py-3 rounded-xl bg-emerald-700 text-white text-lg font-semibold shadow hover:bg-emerald-800 transition">
            Connexion
          </button>

          <button className="px-5 py-3 rounded-xl border border-emerald-700 text-emerald-800 text-lg font-semibold hover:bg-emerald-700 hover:text-white transition">
            Inscription
          </button>

          {/* Mobile Language */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-xl border">
            <Globe size={20} className="text-emerald-700" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent outline-none cursor-pointer text-emerald-800 font-medium text-lg"
            >
              <option value="FR">🇫🇷 Français</option>
              <option value="EN">🇬🇧 Anglais</option>
              <option value="AR">🇹🇳 عربي</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
