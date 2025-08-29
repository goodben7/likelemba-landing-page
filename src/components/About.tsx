import React from 'react';
import { Users, Shield, TrendingUp, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Qu'est-ce qu'une tontine ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une tontine est un système d'épargne solidaire où un groupe de personnes cotise régulièrement. 
            Chaque membre reçoit à tour de rôle la totalité des cotisations collectées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Solidarité communautaire</h3>
                  <p className="text-gray-600">Basé sur la confiance mutuelle et l'entraide, la tontine renforce les liens sociaux.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Épargne disciplinée</h3>
                  <p className="text-gray-600">Encourage l'épargne régulière et aide à atteindre des objectifs financiers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibilité financière</h3>
                  <p className="text-gray-600">Alternative aux services bancaires traditionnels, accessible à tous.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-2xl border border-yellow-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pourquoi Likelemba ?</h4>
              <p className="text-gray-700">
                Likelemba digitalise ce système traditionnel pour le rendre plus transparent, sécurisé et facile à gérer. 
                Fini les carnets papier et les risques de perte !
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Communauté africaine" 
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;