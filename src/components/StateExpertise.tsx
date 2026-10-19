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
      badge: "Vitesse < 0.8s • 100% Smartphone",
      desc: "On crée une vitrine unique qui reflète l'ambiance authentique de votre boutique, vos produits et votre savoir-faire. Rapide et fluide sur téléphone comme sur ordinateur, pensé pour donner envie de pousser votre porte ou de réserver en deux clics.",
      benefit: "Fini les modèles interchangeables : votre commerce a une identité forte que vos concurrents ne peuvent pas copier.",
      svg: (isHovered: boolean) => (
        <svg viewBox="0 0 240 120" className="w-full h-28 stroke-[#0A0B0E] fill-none" strokeWidth="1.5">
          {/* Browser frame */}
          <rect x="10" y="10" width="220" height="100" rx="2" stroke="#E5E7EB" fill="#FFFFFF" />
          <line x1="10" y1="28" x2="230" y2="28" stroke="#E5E7EB" />
          <circle cx="22" cy="19" r="2.5" fill="#E5E7EB" />
          <circle cx="32" cy="19" r="2.5" fill="#E5E7EB" />
          <circle cx="42" cy="19" r="2.5" fill="#E5E7EB" />

          {/* Dynamic layout blocks */}
          <rect
            x="24"
            y="38"
            width={isHovered ? "90" : "80"}
            height="14"
            rx="1"
            fill="#002FA7"
            stroke="none"
            className="transition-all duration-300"
          />
          <rect x="24" y="58" width="110" height="6" rx="1" fill="#E5E7EB" stroke="none" />
          <rect x="24" y="68" width="95" height="6" rx="1" fill="#E5E7EB" stroke="none" />
          <rect
            x="24"
            y="82"
            width="55"
            height="16"
            rx="2"
            fill={isHovered ? "#002FA7" : "#0A0B0E"}
            stroke="none"
            className="transition-colors duration-300"
          />

          {/* Right visual card */}
          <rect
            x="148"
            y="38"
            width="72"
            height="60"
            rx="2"
            fill={isHovered ? "#002FA7/10" : "#F8F9FA"}
            stroke={isHovered ? "#002FA7" : "#E5E7EB"}
            className="transition-colors duration-300"
          />
          <path
            d="M 160 82 L 175 62 L 190 75 L 205 55 L 215 82 Z"
            fill="none"
            stroke={isHovered ? "#002FA7" : "#94A3B8"}
            strokeWidth="1.2"
          />
        </svg>
      ),
    },
    {
      id: 2,
      num: "PILIER 02",
      title: "Être premier sur Google dans votre ville",
      badge: "Pack Local Google Maps • Top #1",
      desc: "Quand un habitant cherche « boucherie », « coiffeur » ou « restaurant » suivi du nom de votre ville sur son téléphone, nous faisons tout le travail en coulisses pour que votre commerce apparaisse tout en haut des résultats, devant vos concurrents.",
      benefit: "Vous captez naturellement les nouveaux habitants et les passants du quartier qui cherchent où aller aujourd'hui.",
      svg: (isHovered: boolean) => (
        <svg viewBox="0 0 240 120" className="w-full h-28 stroke-[#0A0B0E] fill-none" strokeWidth="1.5">
          {/* Search bar simulation */}
          <rect x="15" y="15" width="210" height="26" rx="2" stroke="#E5E7EB" fill="#FFFFFF" />
          <circle cx="30" cy="28" r="4.5" stroke="#002FA7" strokeWidth="1.5" />
          <line x1="33.5" y1="31.5" x2="38" y2="36" stroke="#002FA7" strokeWidth="1.5" />
          <text x="46" y="32" fontSize="9" fill="#0A0B0E" fontFamily="monospace">
            {isHovered ? "meilleur commerce près de moi" : "artisan [votre ville]"}
          </text>

          {/* Ranking list */}
          {/* #1 Result */}
          <g className="transition-transform duration-300">
            <rect
              x="15"
              y="52"
              width="210"
              height="30"
              rx="2"
              fill={isHovered ? "#002FA7/8" : "#FFFFFF"}
              stroke={isHovered ? "#002FA7" : "#002FA7"}
              strokeWidth={isHovered ? "2" : "1.5"}
            />
            <rect x="25" y="60" width="16" height="14" rx="1" fill="#002FA7" />
            <text x="33" y="70" fontSize="9" fill="#FFFFFF" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
              1
            </text>
            <text x="48" y="67" fontSize="10" fill="#0A0B0E" fontFamily="sans-serif" fontWeight="bold">
              Votre Commerce — Avis ★★★★★
            </text>
            <text x="48" y="77" fontSize="8" fill="#002FA7" fontFamily="monospace">
              Ouvert • À 250m de votre position
            </text>
          </g>

          {/* #2 Result */}
          <rect x="15" y="88" width="210" height="20" rx="2" fill="#F8F9FA" stroke="#E5E7EB" />
          <text x="25" y="101" fontSize="8" fill="#94A3B8" fontFamily="monospace">
            2. Concurrent A
          </text>
        </svg>
      ),
    },
    {
      id: 3,
      num: "PILIER 03",
      title: "La publicité ciblée qui remplit la boutique",
      badge: "Rayon de 3 à 15 km • Retours Mesurables",
      desc: "On ne se contente pas de mettre le site en ligne. Nous créons et pilotons vos campagnes publicitaires locales pour faire connaître vos spécialités aux habitants de votre zone au moment où ils décident d'acheter, sans que vous n'ayez à toucher un seul bouton.",
      benefit: "Chaque euro investi sert directement à amener de vrais clients qui dépensent dans votre établissement.",
      svg: (isHovered: boolean) => (
        <svg viewBox="0 0 240 120" className="w-full h-28" fill="none">
          {/* Geo radar grid */}
          <circle cx="120" cy="60" r="48" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 3" />
          <circle
            cx="120"
            cy="60"
            r={isHovered ? "36" : "32"}
            stroke="#002FA7"
            strokeWidth="1.5"
            strokeOpacity={isHovered ? "0.6" : "0.3"}
            className="transition-all duration-500"
          />
          <circle cx="120" cy="60" r="16" stroke="#002FA7" strokeWidth="1.5" strokeOpacity="0.8" />

          {/* Center store icon */}
          <rect x="112" y="52" width="16" height="16" rx="2" fill="#002FA7" />
          <path d="M 115 58 L 120 54 L 125 58 V 65 H 115 Z" fill="#FFFFFF" />

          {/* Surrounding local customer pins */}
          <circle
            cx={isHovered ? "80" : "85"}
            cy={isHovered ? "45" : "48"}
            r="4"
            fill="#0A0B0E"
            className="transition-all duration-300"
          />
          <circle
            cx={isHovered ? "165" : "160"}
            cy={isHovered ? "40" : "44"}
            r="4"
            fill="#0A0B0E"
            className="transition-all duration-300"
          />
          <circle
            cx={isHovered ? "150" : "145"}
            cy={isHovered ? "85" : "80"}
            r="4"
            fill="#002FA7"
            className="transition-all duration-300"
          />
          <circle
            cx={isHovered ? "90" : "95"}
            cy={isHovered ? "80" : "76"}
            r="4"
            fill="#0A0B0E"
            className="transition-all duration-300"
          />

          {/* Radar scan beam */}
          <line
            x1="120"
            y1="60"
            x2={isHovered ? "160" : "150"}
            y2={isHovered ? "25" : "35"}
            stroke="#002FA7"
            strokeWidth="1.5"
            className="transition-all duration-300"
          />
          <text x="120" y="112" fontSize="8" fill="#4B5563" textAnchor="middle" fontFamily="monospace">
            Zone d&apos;attraction : 5 km autour de la boutique
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

      {/* The 3 Architectural Pillar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto">
        {pillars.map((pillar) => {
          const isHovered = hoveredCard === pillar.id;
          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setHoveredCard(pillar.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`border rounded-[2px] bg-[#FFFFFF] p-6 flex flex-col justify-between transition-all duration-200 ${
                isHovered
                  ? "border-[#002FA7] shadow-md -translate-y-1"
                  : "border-[#E5E7EB] hover:border-gray-400"
              }`}
            >
              <div>
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#E5E7EB]">
                  <span className="font-mono-code text-xs font-bold text-[#002FA7]">
                    {pillar.num}
                  </span>
                  <span className="font-mono-code text-[10px] bg-[#F8F9FA] border border-[#E5E7EB] text-[#4B5563] px-2 py-0.5 rounded-[2px]">
                    {pillar.badge}
                  </span>
                </div>

                {/* Animated Interactive SVG Schema */}
                <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-[2px] p-2 mb-4 overflow-hidden">
                  {pillar.svg(isHovered)}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#0A0B0E] tracking-tight mb-2.5 leading-snug">
                  {pillar.title}
                </h3>

                {/* Clear explanation without jargon */}
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                  {pillar.desc}
                </p>
              </div>

              {/* Concrete business outcome */}
              <div className="pt-3 border-t border-[#E5E7EB] text-xs font-mono-code text-[#0A0B0E] flex items-start gap-2 bg-[#F8F9FA]/60 p-2.5 rounded-[2px]">
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
