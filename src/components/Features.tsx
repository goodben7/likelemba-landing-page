import React from 'react';
import { Users, Smartphone, Eye, Bell, Globe, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Créer et gérer un groupe",
      description: "Constituez facilement votre groupe de tontine et invitez les membres"
    },
    {
      icon: CreditCard,
      title: "Paiements Mobile Money",
      description: "Intégration avec Airtel Money, M-Pesa, et Orange Money"
    },
    {
      icon: Eye,
      title: "Suivi en temps réel",
      description: "Consultez l'état des cotisations et les soldes à tout moment"
    },
    {
      icon: Bell,
      title: "Notifications automatiques",
      description: "Rappels de cotisations et alertes importantes"
    },
    {
      icon: Globe,
      title: "Multilingue",
      description: "Disponible en Français, Lingala et Swahili"
    },
    {
      icon: Smartphone,
      title: "Interface intuitive",
      description: "Design simple et ergonomique adapté à tous les utilisateurs"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités clés</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour gérer vos tontines efficacement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Paiements simplifiés</h3>
              <p className="text-yellow-100 text-lg mb-6">
                Intégration native avec tous les services de Mobile Money populaires en RDC. 
                Cotisez et recevez vos fonds directement via votre téléphone.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">Airtel Money</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">M-Pesa</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium">Orange Money</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Mobile payment" 
                className="rounded-2xl shadow-2xl max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;