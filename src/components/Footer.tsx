import React from 'react';
import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">Likelemba</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-md">
              La première application mobile pour gérer vos tontines en République Démocratique du Congo. 
              Épargnez ensemble, grandissez ensemble.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">À propos</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Fonctionnalités</a></li>
              <li><a href="#security" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Sécurité</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">Kinshasa, RDC</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">contact@likelemba.cd</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+243 81 234 5678</span>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Langues supportées</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 px-3 py-1 rounded-lg text-sm">Français</span>
                <span className="bg-gray-800 px-3 py-1 rounded-lg text-sm">Lingala</span>
                <span className="bg-gray-800 px-3 py-1 rounded-lg text-sm">Swahili</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 Likelemba. Tous droits réservés.</p>
              <p className="text-sm mt-1">Fait avec ❤️ pour la communauté congolaise</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Service opérationnel</span>
              </div>
              <div className="text-sm text-gray-400">
                Version 2.1.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;