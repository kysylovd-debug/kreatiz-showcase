"use client";

import React, { useState } from "react";

export default function MieEtFarine() {
  const [reservedBreads, setReservedBreads] = useState<{ [key: string]: number }>({});
  const [reservedSuccess, setReservedSuccess] = useState(false);

  const breads = [
    {
      id: "tourte-meule",
      name: "Tourte de Meule au Levain Dur",
      flour: "Farine T80 de meule de pierre naturelle",
      fermentation: "Fermentation lente 28h en paniers d'osier",
      price: "6.80 € (800g)",
      conservation: "Se conserve 5 à 7 jours sans sécher",
      tag: "Pain Signature",
    },
    {
      id: "epeautre",
      name: "Pain de Grand Épeautre Non-Hybridé",
      flour: "Variété ancienne Oberkulmer biologique",
      fermentation: "Levain doux d'épeautre 18h",
      price: "7.20 € (700g)",
      conservation: "Riche en minéraux, très faible indice glycémique",
      tag: "Digestibilité Haute",
    },
    {
      id: "seigle-auvergne",
      name: "Pavé de Seigle Noir & Graines Toastées",
      flour: "Seigle pur T130 et graines de tournesol bio",
      fermentation: "Levain noir de seigle séculaire",
      price: "5.90 € (600g)",
      conservation: "Mie dense et parfumée, idéal avec les fromages affinés",
      tag: "Terroir Rustique",
    },
    {
      id: "brioche-feuilletée",
      name: "Brioche Feuilletée au Sucre Muscovado",
      flour: "Farine de gruau bio & Beurre de baratte AOP",
      fermentation: "Pousse lente à froid 36h",
      price: "4.50 € la part",
      conservation: "Feuilletage croustillant, cœur fondant au caramel roux",
      tag: "Gourmandise du Fournil",
    },
  ];

  const handleAddBread = (id: string) => {
    setReservedBreads((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setReservedSuccess(true);
    setTimeout(() => setReservedSuccess(false), 2400);
  };

  const totalReserved = Object.values(reservedBreads).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full bg-[#FAF7F2] text-[#3D312A] font-jakarta selection:bg-[#C88A4B] selection:text-white pb-20">
      {/* Live Baking Batch Alert */}
      <div className="bg-[#EAE3D5] text-[#3D312A] border-b border-[#D8CEBE] px-6 py-2.5 flex flex-wrap items-center justify-between text-xs font-mono-code gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C88A4B] animate-pulse"></span>
          <span className="font-bold text-[#C88A4B]">EN DIRECT DU FOURNIL :</span>
          <span>Fournée de 16h30 prête dans 14 minutes</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Pains d&apos;Épeautre & Tourtes chaudes sortant du four à bois</span>
          <div className="bg-[#3D312A] text-[#FAF7F2] px-3 py-1 font-semibold rounded-[2px]">
            Réservation fournil : {totalReserved} pain{totalReserved > 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {reservedSuccess && (
        <div className="bg-[#C88A4B] text-white py-2 text-center text-xs font-mono-code tracking-wide">
          ✓ Pain réservé au fournil pour retrait sans file d&apos;attente.
        </div>
      )}

      {/* Bakery Header */}
      <header className="px-8 sm:px-14 py-8 border-b border-[#EAE3D5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Wheat Ear SVG */}
            <div className="w-12 h-12 bg-[#EAE3D5] rounded-[2px] flex items-center justify-center text-[#C88A4B]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="1.5">
                <path d="M12 2v20M12 4l-4 4M12 4l4 4M12 8l-5 5M12 8l5 5M12 12l-4 4M12 12l4 4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-[#3D312A]">
                MIE & FARINE
              </h1>
              <p className="text-xs font-mono-code text-[#7A6A5E] uppercase tracking-wider">
                Fournil Artisanal au Levain Vivant • Farines Paysannes
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right text-xs font-mono-code text-[#7A6A5E]">
            <div className="font-bold text-[#3D312A]">FOURNIL OUVERT DÈS 06H30</div>
            <div>Pain chaud cuit sur sole de pierre toute la journée</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 sm:px-14 py-16 sm:py-20 border-b border-[#EAE3D5] bg-[#F4EFE6]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8">
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#C88A4B] font-bold mb-3 block">
              L&apos;Art du Pain Naturel
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#3D312A] tracking-tight leading-tight mb-6">
              De l&apos;eau de source, du sel d&apos;Oléron, des farines de meule et un levain centenaire.
            </h2>
            <p className="text-base sm:text-lg text-[#61544A] leading-relaxed max-w-2xl font-light">
              Nous laissons au temps la liberté de faire lever nos pâtes pendant plus de vingt-quatre heures. Aucun ferment de synthèse, aucune farine blanchie : nos céréales proviennent exclusivement de trois paysans-meuniers situés à moins de soixante kilomètres de notre atelier.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono-code">
              <span className="bg-[#FAF7F2] border border-[#D8CEBE] px-3 py-1.5 rounded-[2px] text-[#3D312A]">
                ✓ Levain naturel de 1924 entretenu chaque jour
              </span>
              <span className="bg-[#FAF7F2] border border-[#D8CEBE] px-3 py-1.5 rounded-[2px] text-[#3D312A]">
                ✓ Cuisson douce sur pierre réfractaire
              </span>
            </div>
          </div>

          {/* Bakery Clock / Batch Indicator Graphic */}
          <div className="md:col-span-4 bg-[#FAF7F2] border border-[#D8CEBE] p-6 rounded-[2px] text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#C88A4B] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-[#C88A4B] fill-none" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#3D312A] mb-1">
              Les Fournées du Jour
            </h4>
            <div className="space-y-2 mt-4 text-xs font-mono-code text-[#7A6A5E] text-left">
              <div className="flex justify-between border-b border-[#EAE3D5] pb-1">
                <span>06h45 : Tradition & Campagne</span>
                <span className="text-[#C88A4B] font-bold">Disponible</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE3D5] pb-1">
                <span>11h30 : Tourtes & Seigle noir</span>
                <span className="text-[#C88A4B] font-bold">Disponible</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE3D5] pb-1">
                <span>16h30 : Épeautre & Brioches</span>
                <span className="text-[#C88A4B] font-bold animate-pulse">Au Four</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bread Selection */}
      <section className="px-8 sm:px-14 py-16 border-b border-[#EAE3D5]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#EAE3D5] gap-4">
            <div>
              <span className="text-xs font-mono-code uppercase tracking-wider text-[#C88A4B] font-bold">
                Catalogue du Fournil
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3D312A] tracking-tight mt-1">
                Nos Pains Vivants & Façonnés Main
              </h3>
            </div>
            <span className="text-xs font-mono-code text-[#7A6A5E]">
              Pains vendus au poids ou à la miche entière
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {breads.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#D8CEBE] p-6 rounded-[2px] hover:border-[#C88A4B] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-[#EAE3D5] text-[#3D312A] text-[10px] font-mono-code font-bold px-2 py-0.5 rounded-[2px] uppercase">
                      {item.tag}
                    </span>
                    <span className="text-sm font-mono-code font-bold text-[#C88A4B]">
                      {item.price}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#3D312A] mb-2">{item.name}</h4>
                  <div className="text-xs font-mono-code text-[#7A6A5E] space-y-1 mb-4">
                    <div>🌾 {item.flour}</div>
                    <div>⏱ {item.fermentation}</div>
                    <div className="text-[#3D312A] italic">💡 {item.conservation}</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1EAE0] flex items-center justify-between">
                  <span className="text-xs text-[#7A6A5E] font-mono-code">
                    {reservedBreads[item.id] ? `${reservedBreads[item.id]} réservé(s)` : "Dispo aujourd'hui"}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleAddBread(item.id)}
                    className="bg-[#C88A4B] hover:bg-[#b57a3e] text-white px-4 py-2 text-xs font-mono-code uppercase font-semibold rounded-[2px] transition-colors cursor-pointer"
                  >
                    Réserver ce pain
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakery Location */}
      <footer className="max-w-5xl mx-auto px-8 sm:px-14 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono-code text-[#7A6A5E]">
        <div>
          <h5 className="text-[#3D312A] uppercase font-bold tracking-wider mb-2">Fournil de Quartier</h5>
          <p className="leading-relaxed">
            Mie & Farine Fournil Bio<br />
            42, Rue des Meuniers Anciens<br />
            44000 Nantes
          </p>
        </div>
        <div>
          <h5 className="text-[#3D312A] uppercase font-bold tracking-wider mb-2">Horaires des Fournées</h5>
          <p className="leading-relaxed">
            Mardi au Samedi : 06h30 — 19h30 non-stop<br />
            Dimanche : 07h00 — 13h00<br />
            Lundi : Repos du levain
          </p>
        </div>
        <div>
          <h5 className="text-[#3D312A] uppercase font-bold tracking-wider mb-2">Commandes Spéciales</h5>
          <p className="leading-relaxed">
            Tél : 02 40 89 12 30<br />
            Email : bonjour@miefarine-fournil.fr<br />
            Grands formats pour réceptions & restaurants
          </p>
        </div>
      </footer>
    </div>
  );
}
