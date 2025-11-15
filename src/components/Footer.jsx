import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-green-100 py-12 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Linky</h2>
          <p className="text-sm text-green-200">
            Connecter les acheteurs, les vendeurs et les transporteurs dans un marché mondial des déchets durable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Marché</a></li>
            <li><a href="#" className="hover:text-white transition">À propos</a></li>
            <li><a href="#" className="hover:text-white transition">Comment ça marche</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Nous contacter</h3>
          <p className="text-sm text-green-200 mb-2">Email : info@linky.com</p>
          <p className="text-sm text-green-200 mb-2">Téléphone : +1 234 567 890</p>
          <p className="text-sm text-green-200">Adresse : 123 Rue Verte, AgriCity, Terre</p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-sm text-green-300">
        © {new Date().getFullYear()} Linky. Tous droits réservés.
      </div>
    </footer>
  );
}
