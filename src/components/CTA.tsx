import { Download, UserPlus, ArrowRight, Smartphone, Shield, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-3xl mb-8">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Transformez votre avenir financier
            <br />
            <span className="text-yellow-100">dès aujourd'hui</span>
          </h2>
          
          <p className="text-xl text-yellow-50 mb-4 max-w-2xl mx-auto leading-relaxed">
            Rejoignez la communauté Likelemba et découvrez comment des milliers de Congolais
            sécurisent leur avenir financier ensemble.
          </p>
          
          <p className="text-lg text-yellow-100 mb-8 font-medium">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block mb-2 mr-2">Sans frais cachés</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block mb-2">Accès 24/7</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group bg-white text-yellow-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg">
              <Download className="w-6 h-6" />
              <span>Télécharger l'app</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-all duration-300 flex items-center space-x-2">
              <UserPlus className="w-5 h-5" />
              <span>Rejoindre la liste d'attente</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-yellow-100 mr-2" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-yellow-100 text-sm">Utilisateurs</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-yellow-100 mr-2" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-yellow-100 text-sm">Groupes actifs</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-yellow-100 mr-2" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-yellow-100 text-sm">Sécurité</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 fill-white">
          <path d="M0,64L1440,32L1440,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTA;