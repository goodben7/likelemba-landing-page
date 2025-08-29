import { Download, UserPlus, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Épargnez ensemble,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> grandissez ensemble</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Likelemba révolutionne la gestion des tontines en RDC. Organisez, suivez et gérez votre épargne communautaire en toute sécurité avec notre application mobile.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <Download className="w-5 h-5" />
                <span>Télécharger l'app</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-yellow-300 hover:bg-yellow-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Liste d'attente</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Utilisateurs actifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Groupes de tontines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Fiabilité</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <img 
                    src="/assets/images/img-1.jpeg" 
                    alt="Likelemba App Interface"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white font-bold text-sm">Nouveau!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;