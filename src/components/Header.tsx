import React, { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Likelemba</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">À propos</a>
            <a href="#features" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">Fonctionnalités</a>
            <a href="#security" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">Sécurité</a>
            <a href="#faq" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200">FAQ</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105">
              Télécharger
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200" onClick={toggleMenu}>À propos</a>
              <a href="#features" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200" onClick={toggleMenu}>Fonctionnalités</a>
              <a href="#security" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200" onClick={toggleMenu}>Sécurité</a>
              <a href="#faq" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200" onClick={toggleMenu}>FAQ</a>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-lg font-semibold w-full mt-4">
                Télécharger
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;