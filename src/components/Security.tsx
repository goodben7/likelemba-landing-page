import React from 'react';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Authentification OTP",
      description: "Connexion sécurisée avec code de vérification par SMS"
    },
    {
      icon: Lock,
      title: "Données chiffrées",
      description: "Toutes vos informations sont protégées par un chiffrement de niveau bancaire"
    },
    {
      icon: Eye,
      title: "Transparence totale",
      description: "Historique complet des transactions et cotisations accessible à tous les membres"
    },
    {
      icon: CheckCircle,
      title: "Vérifications automatiques",
      description: "Contrôles automatiques pour prévenir les erreurs et fraudes"
    }
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sécurité & Confiance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre tranquillité d'esprit est notre priorité. Likelemba utilise les meilleures technologies 
            pour protéger vos fonds et vos données.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Conformité et régulation</h3>
            <p className="text-gray-300 text-lg mb-8">
              Likelemba respecte toutes les réglementations financières locales et internationales. 
              Nos systèmes sont régulièrement audités pour garantir la plus haute sécurité.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-8 h-8 text-gray-900" />
                </div>
                <span className="text-yellow-400 font-semibold">Certifié sécurisé</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-8 h-8 text-gray-900" />
                </div>
                <span className="text-yellow-400 font-semibold">Audité régulièrement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;