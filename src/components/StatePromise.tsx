"use client";

import React from "react";

interface StatePromiseProps {
  onNext: () => void;
}

export default function StatePromise({ onNext }: StatePromiseProps) {
  const commitments = [
    {
      num: "01",
      title: "Un interlocuteur unique dédié",
      desc: "Pas d'intermédiaires, pas de stagiaire qui change tous les six mois. Vous travaillez en direct avec le concepteur de votre site du premier échange jusqu'au suivi annuel.",
      // Custom clean geometric SVG icon
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#002FA7] fill-none" strokeWidth="1.75">
          <circle cx="12" cy="7" r="4" />
          <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Zéro jargon technique",
      desc: "Nous parlons de vos clients, de vos réservations, de votre chiffre d'affaires et de votre quartier. Vous n'entendrez jamais de sigles incompréhensibles de notre part.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#002FA7] fill-none" strokeWidth="1.75">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h8M8 14h4" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Suivi & tranquillité totale",
      desc: "Mise à jour de vos horaires, nouveaux arrivages, photos de saison : un simple message et nous actualisons votre vitrine sous 24h. Votre esprit reste à votre métier.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#002FA7] fill-none" strokeWidth="1.75">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto select-none">
      {/* 12-Column Swiss Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column: 7 Cols - Story, Promise & H1 */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#002FA7] uppercase tracking-widest font-bold mb-4">
            <span className="w-2 h-2 bg-[#002FA7] rounded-[1px]"></span>
            <span>01 / STUDIO DIGITAL POUR COMMERCES & ARTISANS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.12] text-[#0A0B0E] mb-6">
            Nous prenons soin de l&apos;image de votre commerce avec la{" "}
            <span className="underline decoration-[#002FA7] decoration-2 underline-offset-4">
              même exigence
            </span>{" "}
            que si c&apos;était le nôtre.
          </h1>

          <div className="space-y-4 text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl font-normal">
            <p>
              Bouchers, coiffeurs, restaurateurs, artisans du terroir : vous passez vos journées à perfectionner votre geste, choisir vos matières premières et accueillir vos habitués. Pourtant, sur Internet, votre image est souvent négligée ou confiée à des plateformes génériques sans âme.
            </p>
            <p>
              Chez <strong className="text-[#0A0B0E] font-semibold">KREATIZ</strong>, nous refusons les modèles préfabriqués et le jargon d&apos;agence. Nous concevons chaque site comme une pièce d&apos;artisanat : une identité visuelle digne de votre talent, une clarté immédiate sur smartphone et un référencement local précis qui fait venir de vrais clients dans votre établissement.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono-code text-[#4B5563]">
            <div className="flex items-center gap-2 border border-[#E5E7EB] bg-[#F8F9FA] px-3 py-1.5 rounded-[2px]">
              <span className="text-[#002FA7] font-bold">●</span>
              <span>100% Conçu en France & Suisse</span>
            </div>
            <div className="flex items-center gap-2 border border-[#E5E7EB] bg-[#F8F9FA] px-3 py-1.5 rounded-[2px]">
              <span className="text-[#002FA7] font-bold">●</span>
              <span>Propriétaire à 100% de votre site</span>
            </div>
          </div>
        </div>

        {/* Right Column: 5 Cols - Architectural Commitment Block */}
        <div className="lg:col-span-5 border border-[#E5E7EB] rounded-[2px] bg-[#FFFFFF] shadow-sm divide-y divide-[#E5E7EB]">
          <div className="p-4 bg-[#F8F9FA] border-b border-[#E5E7EB] flex items-center justify-between">
            <span className="font-mono-code text-xs uppercase tracking-wider text-[#0A0B0E] font-bold">
              Nos 3 Engagements Concrets
            </span>
            <span className="font-mono-code text-[11px] text-[#002FA7] font-bold">
              GARANTIE ARTISANALE
            </span>
          </div>

          {commitments.map((item) => (
            <div
              key={item.num}
              className="p-5 sm:p-6 hover:bg-[#F8F9FA]/80 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 border border-[#E5E7EB] group-hover:border-[#002FA7] rounded-[2px] bg-[#FFFFFF] flex items-center justify-center transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono-code text-xs text-[#002FA7] font-bold">
                      {item.num}.
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0A0B0E] tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Transition Indicator */}
      <div className="pt-4 flex justify-center items-center">
        <button
          type="button"
          onClick={onNext}
          className="group inline-flex items-center gap-3 border border-[#E5E7EB] hover:border-[#002FA7] bg-[#FFFFFF] hover:bg-[#F8F9FA] px-4 py-2 rounded-[2px] font-mono-code text-xs text-[#0A0B0E] transition-all cursor-pointer shadow-xs"
        >
          <span>Faire défiler pour voir comment nous travaillons (02)</span>
          <span className="w-5 h-5 border border-[#E5E7EB] group-hover:border-[#002FA7] group-hover:bg-[#002FA7] group-hover:text-white rounded-[2px] flex items-center justify-center text-xs transition-colors">
            ↓
          </span>
        </button>
      </div>
    </div>
  );
}
