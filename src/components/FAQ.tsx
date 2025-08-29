import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Qu'est-ce qu'une tontine exactement ?",
      answer: "Une tontine est un système d'épargne rotatif où un groupe de personnes verse régulièrement une somme convenue. Chaque tour, un membre différent reçoit la totalité des cotisations. C'est un mécanisme traditionnel de solidarité financière très répandu en Afrique."
    },
    {
      question: "Comment Likelemba sécurise-t-elle les fonds ?",
      answer: "Likelemba utilise l'authentification OTP, le chiffrement bancaire et s'intègre aux services Mobile Money agréés. Nous ne détenons jamais vos fonds - les transferts se font directement entre membres via les plateformes de paiement sécurisées."
    },
    {
      question: "Quels sont les frais d'utilisation ?",
      answer: "Likelemba applique des frais transparents très faibles (moins de 1% par transaction). Pas de frais cachés, pas d'abonnement mensuel. Vous ne payez que quand vous utilisez l'application."
    },
    {
      question: "Comment créer un groupe de tontine ?",
      answer: "C'est très simple ! Téléchargez l'app, créez votre compte, puis cliquez sur 'Créer un groupe'. Définissez le montant des cotisations, la fréquence et invitez vos proches via SMS ou WhatsApp."
    },
    {
      question: "Que se passe-t-il si un membre ne cotise pas ?",
      answer: "L'application envoie des rappels automatiques et permet au groupe de définir des règles strictes. En cas de non-paiement répété, le groupe peut exclure le membre récalcitrant via un vote."
    },
    {
      question: "L'application fonctionne-t-elle sans internet ?",
      answer: "Likelemba nécessite une connexion internet pour la synchronisation et les paiements. Cependant, vous pouvez consulter votre historique en mode hors ligne grâce au cache local."
    },
    {
      question: "Dans quelles langues est disponible Likelemba ?",
      answer: "L'application est disponible en Français, Lingala et Swahili pour s'adapter aux principales langues parlées en RDC et faciliter l'adoption par tous."
    },
    {
      question: "Puis-je participer à plusieurs tontines simultanément ?",
      answer: "Absolument ! Vous pouvez être membre de plusieurs groupes de tontine en même temps. L'application vous aide à gérer tous vos groupes depuis une seule interface."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          <p className="text-xl text-gray-600">
            Toutes les réponses à vos questions sur Likelemba et les tontines
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                {openItem === index ? (
                  <ChevronUp className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200">
            Contactez notre équipe
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;