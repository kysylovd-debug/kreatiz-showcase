"use client";

import React, { useState } from "react";

interface StateExpertiseProps {
  onNext: () => void;
  onPrev: () => void;
}

export default function StateExpertise({ onNext, onPrev }: StateExpertiseProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      num: "PILIER 01",
      title: "Un site sur-mesure qui vous ressemble vraiment",
      badge: "Chargement < 0.8s • 100% Mobile",
      desc: "Nous concevons une vitrine unique qui reflète l'atmosphère authentique de votre établissement, vos spécialités et votre savoir-faire. Conçu pour smartphone et ordinateur, il donne envie à vos visiteurs de pousser votre porte ou de réserver sans hésiter.",
      benefit: "Une identité visuelle singulière et mémorable que vos concurrents ne peuvent pas reproduire.",
      svg: (isHovered: boolean) => (
        <svg viewBox="0 0 260 125" className="w-full h-32 select-none" fill="none">
          {/* Browser Window Frame */}
          <rect x="8" y="8" width="244" height="108" rx="2" stroke="#E5E7EB" strokeWidth="1" fill="#FFFFFF" />
          
          {/* Header Bar */}
          <line x1="8" y1="26" x2="252" y2="26" stroke="#E5E7EB" strokeWidth="1" />
          <circle cx="18" cy="17" r="2" fill="#D1D5DB" />
          <circle cx="26" cy="17" r="2" fill="#D1D5DB" />
          <circle cx="34" cy="17" r="2" fill="#D1D5DB" />
          
          {/* URL Pill */}
          <rect x="46" y="12" width="100" height="10" rx="1" fill="#F3F4F6" />
          <text x="52" y="19.5" fontSize="6.5" fill="#9CA3AF" fontFamily="monospace">
            votre-commerce.fr
          </text>

          {/* Hero Section Wireframe */}
          <rect
            x="18"
            y="34"
            width={isHovered ? "124" : "112"}
            height="12"
            rx="1"
            fill="#002FA7"
            className="transition-all duration-300"
          />
          <rect x="18" y="52" width="100" height="4" rx="1" fill="#E5E7EB" />
          <rect x="18" y="60" width="85" height="4" rx="1" fill="#E5E7EB" />
          
          {/* Hero CTA Button */}
          <rect
            x="18"
            y="72"
            width="46"
            height="12"
            rx="1"
            fill={isHovered ? "#002FA7" : "#0A0B0E"}
            className="transition-colors duration-300"
          />
          <text x="25" y="80" fontSize="5.5" fill="#FFFFFF" fontFamily="monospace" fontWeight="bold">
            RÉSERVER
          </text>

          {/* Right Showcase Card */}
          <rect
            x="154"
            y="34"
            width="88"
            height="50"
            rx="2"
            fill={isHovered ? "#002FA7" : "#F8F9FA"}
            fillOpacity={isHovered ? "0.06" : "1"}
            stroke={isHovered ? "#002FA7" : "#E5E7EB"}
            strokeWidth="1"
            className="transition-all duration-300"
          />
          <circle cx="174" cy="50" r="7" stroke={isHovered ? "#002FA7" : "#94A3B8"} strokeWidth="1" />
          <path
            d="M 160 76 L 176 60 L 194 72 L 210 54 L 234 76"
            stroke={isHovered ? "#002FA7" : "#94A3B8"}
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* 3 Bottom Feature Pills */}
          <rect x="18" y="93" width="68" height="14" rx="1" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="0.8" />
          <rect x="92" y="93" width="68" height="14" rx="1" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="0.8" />
          <rect x="166" y="93" width="76" height="14" rx="1" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="0.8" />
        </svg>
      ),
    },
    {
      id: 2,
      num: "PILIER 02",
      title: "Être premier sur Google dans votre ville",
      badge: "Pack Local Google • Top #1",
      desc: "Quand un habitant ou un passant cherche votre métier suivi du nom de votre ville sur son smartphone, nous optimisons votre référencement naturel et votre fiche pour apparaître en tête des résultats.",
      benefit: "Vous attirez directement les clients locaux prêts à acheter aujourd'hui dans votre quartier.",
      svg: (isHovered: boolean) => (
        <svg viewBox="0 0 260 125" className="w-full h-32 select-none" fill="none">
          {/* Search bar simulation with correct vertical baseline */}
          <rect x="12" y="10" width="236" height="24" rx="2" stroke="#E5E7EB" strokeWidth="1" fill="#FFFFFF" />
          <circle cx="25" cy="22" r="3.5" stroke="#002FA7" strokeWidth="1.2" />
          <line x1="27.5" y1="24.5" x2="31" y2="28" stroke="#002FA7" strokeWidth="1.2" strokeLinecap="round" />
          <text x="38" y="25" fontSize="7.5" fill="#374151" fontFamily="sans-serif">
            {isHovered ? "meilleur artisan à proximité" : "artisan [votre ville]"}
          </text>
          <line x1={isHovered ? "145" : "110"} y1="17" x2={isHovered ? "145" : "110"} y2="27" stroke="#002FA7" strokeWidth="1" className="animate-pulse" />

          {/* Top Result #1 (Your Shop) */}
          <g className="transition-all duration-300">
            <rect
              x="12"
              y="42"
              width="236"
              height="38"
              rx="2"
              fill={isHovered ? "#002FA7" : "#FFFFFF"}
              fillOpacity={isHovered ? "0.05" : "1"}
              stroke="#002FA7"
              strokeWidth={isHovered ? "1.5" : "1"}
            />
            {/* Rank badge */}
            <rect x="22" y="50" width="14" height="14" rx="1" fill="#002FA7" />
            <text x="29" y="60" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
              1
            </text>

            {/* Shop title */}
            <text x="44" y="58" fontSize="8.5" fill="#0A0B0E" fontFamily="sans-serif" fontWeight="600">
              Votre Commerce — Avis Vérifiés
            </text>

            {/* Stars & Distance */}
            <text x="44" y="70" fontSize="7" fill="#D97706" fontFamily="sans-serif">
              ★★★★★
            </text>
            <text x="78" y="70" fontSize="7" fill="#002FA7" fontFamily="monospace">
              (5.0) • Ouvert • À 250m
            </text>
          </g>

          {/* Result #2 (Competitor, subtle) */}
          <rect x="12" y="86" width="236" height="28" rx="2" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="1" />
          <rect x="22" y="93" width="14" height="14" rx="1" fill="#E5E7EB" />
          <text x="29" y="103" fontSize="8" fill="#6B7280" textAnchor="middle" fontFamily="monospace">
            2
          </text>
          <text x="44" y="102" fontSize="7.5" fill="#6B7280" fontFamily="sans-serif">
            Concurrent local habituel — Avis mitigés
          </text>
        </svg>
      ),
    },
    {
      id: 3,
      num: "PILIER 03",
      title: "La publicité ciblée qui remplit la boutique",
      badge: "Rayon de 3 à 15 km • Retours Mesurables",
      desc: "Nous créons et pilotons vos campagnes de promotion locale pour faire découvrir vos nouveautés et temps forts aux habitants de votre zone de chalandise au bon moment, sans complication pour vous.",
      benefit: "Chaque euro investi génère des visites réelles et du chiffre d'affaires en caisse.",
      svg: (isHovered: boolean) => (
        <svg viewBox="0 0 260 125" className="w-full h-32 select-none" fill="none">
          {/* Subtle Map Grid lines */}
          <line x1="20" y1="20" x2="240" y2="20" stroke="#F3F4F6" strokeWidth="1" />
          <line x1="20" y1="60" x2="240" y2="60" stroke="#F3F4F6" strokeWidth="1" />
          <line x1="20" y1="100" x2="240" y2="100" stroke="#F3F4F6" strokeWidth="1" />
          <line x1="60" y1="10" x2="60" y2="115" stroke="#F3F4F6" strokeWidth="1" />
          <line x1="130" y1="10" x2="130" y2="115" stroke="#F3F4F6" strokeWidth="1" />
          <line x1="200" y1="10" x2="200" y2="115" stroke="#F3F4F6" strokeWidth="1" />

          {/* Concentric Radar Circles */}
          <circle cx="130" cy="62" r="50" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
          <circle
            cx="130"
            cy="62"
            r={isHovered ? "36" : "32"}
            stroke="#002FA7"
            strokeWidth="1"
            strokeOpacity={isHovered ? "0.7" : "0.35"}
            className="transition-all duration-500"
          />
          <circle cx="130" cy="62" r="16" stroke="#002FA7" strokeWidth="1" strokeOpacity="0.8" />

          {/* Center Store Pin */}
          <circle cx="130" cy="62" r="6" fill="#002FA7" />
          <circle cx="130" cy="62" r="2.5" fill="#FFFFFF" />

          {/* Surrounding Client Pins with Distance */}
          {/* Top-right pin */}
          <circle cx={isHovered ? "174" : "168"} cy="42" r="3.5" fill="#0A0B0E" className="transition-all duration-300" />
          <rect x={isHovered ? "180" : "174"} y="38" width="28" height="10" rx="1" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="0.5" />
          <text x={isHovered ? "184" : "178"} y="45.5" fontSize="5.5" fill="#4B5563" fontFamily="monospace">
            1.2 km
          </text>

          {/* Bottom-left pin */}
          <circle cx={isHovered ? "86" : "92"} cy="78" r="3.5" fill="#0A0B0E" className="transition-all duration-300" />
          <rect x={isHovered ? "54" : "60"} y="74" width="28" height="10" rx="1" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="0.5" />
          <text x={isHovered ? "58" : "64"} y="81.5" fontSize="5.5" fill="#4B5563" fontFamily="monospace">
            2.8 km
          </text>

          {/* Bottom-right pin */}
          <circle cx="166" cy="88" r="3.5" fill="#002FA7" />
          <rect x="172" y="84" width="28" height="10" rx="1" fill="#002FA7" fillOpacity="0.1" stroke="#002FA7" strokeWidth="0.5" />
          <text x="176" y="91.5" fontSize="5.5" fill="#002FA7" fontFamily="monospace" fontWeight="bold">
            Client
          </text>

          {/* Radar Sweep Beam */}
          <line
            x1="130"
            y1="62"
            x2={isHovered ? "170" : "158"}
            y2={isHovered ? "28" : "36"}
            stroke="#002FA7"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="transition-all duration-300"
          />

          {/* Radius perimeter label */}
          <text x="130" y="118" fontSize="7" fill="#6B7280" textAnchor="middle" fontFamily="monospace">
            Rayon de ciblage : 5 km autour du point de vente
          </text>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto select-none">
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#002FA7] uppercase tracking-widest font-bold mb-3">
          <span className="w-2 h-2 bg-[#002FA7] rounded-[1px]"></span>
          <span>02 / UN ACCOMPAGNEMENT COMPLET, EXPLIQUÉ SIMPLEMENT</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.03em] leading-tight text-[#0A0B0E] max-w-4xl">
          Un beau site ne sert à rien si personne ne le voit.{" "}
          <span className="text-[#002FA7]">
            Nous gérons les trois piliers
          </span>{" "}
          qui remplissent votre agenda.
        </h2>
      </div>

      {/* The 3 Architectural Pillar Cards with Generous Spacing */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 my-auto">
        {pillars.map((pillar) => {
          const isHovered = hoveredCard === pillar.id;
          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setHoveredCard(pillar.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border rounded-[2px] bg-[#FFFFFF] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                isHovered
                  ? "border-[#002FA7] shadow-lg -translate-y-1"
                  : "border-[#E5E7EB] hover:border-gray-400"
              }`}
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E5E7EB]">
                  <span className="font-mono-code text-xs font-bold text-[#002FA7]">
                    {pillar.num}
                  </span>
                  <span className="font-mono-code text-[10px] bg-[#F8F9FA] border border-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-[2px]">
                    {pillar.badge}
                  </span>
                </div>

                {/* Animated Interactive SVG Schema with Dedicated Padding */}
                <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[2px] p-3 mb-6 overflow-hidden flex items-center justify-center">
                  {pillar.svg(isHovered)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0A0B0E] tracking-tight mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Clear explanation without jargon */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-normal">
                  {pillar.desc}
                </p>
              </div>

              {/* Concrete business outcome */}
              <div className="pt-3 border-t border-[#E5E7EB] text-xs font-mono-code text-[#0A0B0E] flex items-start gap-2.5 bg-[#F8F9FA]/80 p-3 rounded-[2px]">
                <span className="text-[#002FA7] font-bold">✓</span>
                <span className="leading-snug">{pillar.benefit}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons at Bottom */}
      <div className="pt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center gap-2 font-mono-code text-xs text-[#4B5563] hover:text-[#0A0B0E] transition-colors cursor-pointer"
        >
          <span>↑ Revenir à notre promesse (01)</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="group inline-flex items-center gap-3 border border-[#E5E7EB] hover:border-[#002FA7] bg-[#FFFFFF] hover:bg-[#F8F9FA] px-4 py-2 rounded-[2px] font-mono-code text-xs text-[#0A0B0E] transition-all cursor-pointer shadow-xs"
        >
          <span>Découvrir nos différents styles de sites (03)</span>
          <span className="w-5 h-5 border border-[#E5E7EB] group-hover:border-[#002FA7] group-hover:bg-[#002FA7] group-hover:text-white rounded-[2px] flex items-center justify-center text-xs transition-colors">
            ↓
          </span>
        </button>
      </div>
    </div>
  );
}
