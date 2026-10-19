"use client";

import React from "react";
import { SHOWCASE_ITEMS, ShowcaseItem } from "./showcase/showcaseData";

interface StateShowcaseProps {
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onOpenFullPreview: (id: string) => void;
  onPrevState: () => void;
}

export default function StateShowcase({
  currentIndex,
  onSelectIndex,
  onOpenFullPreview,
  onPrevState,
}: StateShowcaseProps) {
  const total = SHOWCASE_ITEMS.length;

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % total);
  };

  const activeItem = SHOWCASE_ITEMS[currentIndex];

  // Helper to calculate circular orbital transformation for each card
  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    let offset = diff;
    if (diff > total / 2) {
      offset = diff - total;
    }

    if (offset === 0) {
      // Active center
      return {
        zIndex: 30,
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    } else if (offset === -1 || (offset === total - 1 && total <= 2)) {
      // Left card
      return {
        zIndex: 10,
        transform: "translateX(-52%) scale(0.82) rotateY(20deg)",
        opacity: 0.45,
        pointerEvents: "auto" as const,
      };
    } else if (offset === 1) {
      // Right card
      return {
        zIndex: 10,
        transform: "translateX(52%) scale(0.82) rotateY(-20deg)",
        opacity: 0.45,
        pointerEvents: "auto" as const,
      };
    } else {
      // Hidden behind in the orbit
      return {
        zIndex: 5,
        transform: `translateX(${offset > 0 ? "80%" : "-80%"}) scale(0.65) rotateY(${offset > 0 ? "-35deg" : "35deg"})`,
        opacity: 0,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto select-none overflow-hidden">
      {/* Top Header of State 03 */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#002FA7] uppercase tracking-widest font-bold mb-1.5">
            <span className="w-2 h-2 bg-[#002FA7] rounded-[1px]"></span>
            <span>03 / ATELIER DES STYLES & DÉMONSTRATION COMMERCIALE</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-[-0.03em] text-[#0A0B0E]">
            Chaque commerce a une âme unique. Voici comment nous la révélons.
          </h2>
        </div>

        {/* Quick Style Switcher Tabs */}
        <div className="flex items-center gap-1.5 font-mono-code text-xs bg-[#F8F9FA] p-1 border border-[#E5E7EB] rounded-[2px] overflow-x-auto max-w-full">
          {SHOWCASE_ITEMS.map((item, idx) => {
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={`px-2.5 py-1 rounded-[2px] whitespace-nowrap transition-colors cursor-pointer ${
                  isCurrent
                    ? "bg-[#002FA7] text-white font-bold"
                    : "text-[#4B5563] hover:text-black hover:bg-white"
                }`}
              >
                {item.num}. {item.name.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Circular / Orbital Carousel Container */}
      <div className="relative w-full flex-1 my-auto flex items-center justify-center [perspective:1200px] min-h-[380px] max-h-[520px]">
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Style précédent"
          className="absolute left-2 sm:left-4 z-40 w-11 h-11 bg-white/95 hover:bg-[#002FA7] hover:text-white border border-[#E5E7EB] hover:border-[#002FA7] rounded-[2px] shadow-md flex items-center justify-center text-sm font-bold font-mono-code transition-all cursor-pointer active:scale-95"
        >
          ←
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Style suivant"
          className="absolute right-2 sm:right-4 z-40 w-11 h-11 bg-white/95 hover:bg-[#002FA7] hover:text-white border border-[#E5E7EB] hover:border-[#002FA7] rounded-[2px] shadow-md flex items-center justify-center text-sm font-bold font-mono-code transition-all cursor-pointer active:scale-95"
        >
          →
        </button>

        {/* The 5 Cards in Orbital Arrangement */}
        <div className="relative w-[92%] sm:w-[75%] lg:w-[62%] h-[92%] max-h-[460px] flex items-center justify-center">
          {SHOWCASE_ITEMS.map((item: ShowcaseItem, idx: number) => {
            const isCurrent = idx === currentIndex;
            const style = getCardStyle(idx);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (!isCurrent) {
                    onSelectIndex(idx);
                  }
                }}
                style={{
                  ...style,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
                }}
                className={`absolute inset-0 bg-[#FFFFFF] border rounded-[2px] flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isCurrent
                    ? "border-[#002FA7] shadow-xl"
                    : "border-[#E5E7EB] hover:border-gray-400"
                }`}
              >
                {/* Mock Browser Header Strip */}
                <div className="h-9 px-4 bg-[#F8F9FA] border-b border-[#E5E7EB] flex items-center justify-between font-mono-code text-[11px] shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></span>
                    <span className="ml-2 text-gray-400 hidden sm:inline">
                      https://{item.id}.artisanat-local.fr
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#002FA7]">
                      {item.num} / 05
                    </span>
                  </div>
                </div>

                {/* Card Content Interior */}
                <div className="p-6 flex-1 flex flex-col justify-between overflow-hidden bg-white">
                  <div>
                    {/* Style Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-block bg-[#002FA7]/10 text-[#002FA7] font-mono-code text-[10px] font-bold px-2 py-0.5 rounded-[2px] uppercase">
                        {item.styleName}
                      </span>
                      <span className="font-mono-code text-[11px] text-[#4B5563]">
                        {item.sector}
                      </span>
                    </div>

                    {/* Brand Name */}
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0A0B0E] uppercase tracking-tight leading-tight">
                      {item.name}
                    </h3>
                    <p className="font-mono-code text-xs text-[#002FA7] font-semibold mt-1 uppercase tracking-wide">
                      {item.subtitle}
                    </p>

                    {/* Vibe description */}
                    <p className="text-xs sm:text-sm text-[#4B5563] mt-3 leading-relaxed line-clamp-3">
                      {item.vibe}
                    </p>
                  </div>

                  {/* Aesthetic Attributes Strip */}
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB] grid grid-cols-2 gap-3 text-xs font-mono-code">
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Typographie réelle</span>
                      <span className="font-bold text-[#0A0B0E] truncate block">{item.fontFamilyName}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] uppercase">Palette de couleurs</span>
                      <div className="flex items-center gap-1.5 mt-1">
                        {item.palette.map((color, cIdx) => (
                          <span
                            key={cIdx}
                            style={{ backgroundColor: color }}
                            className="w-4 h-4 rounded-[1px] border border-black/20"
                            title={color}
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="p-4 bg-[#F8F9FA] border-t border-[#E5E7EB] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2 font-mono-code text-xs text-[#4B5563]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Site 100% interactif & scrollable</span>
                  </div>

                  {isCurrent && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenFullPreview(item.id);
                      }}
                      className="bg-[#002FA7] hover:bg-[#00227A] text-white px-4 py-2 text-xs font-mono-code uppercase font-bold tracking-wider rounded-[2px] transition-colors cursor-pointer shadow-xs active:translate-y-px flex items-center gap-2"
                    >
                      <span>Agrandir et explorer en grand format</span>
                      <span>↗</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="pt-2 flex items-center justify-between font-mono-code text-xs text-[#4B5563]">
        <button
          type="button"
          onClick={onPrevState}
          className="hover:text-black transition-colors cursor-pointer"
        >
          ↑ Revenir au savoir-faire (02)
        </button>

        <div className="flex items-center gap-2">
          <span>Commerce actif :</span>
          <span className="text-black font-bold uppercase">{activeItem.name}</span>
          <span className="text-[#002FA7] font-semibold">({activeItem.styleName.split("—")[1]?.trim()})</span>
        </div>

        <button
          type="button"
          onClick={() => onOpenFullPreview(activeItem.id)}
          className="text-[#002FA7] hover:underline font-bold cursor-pointer"
        >
          Mode Grand Format (Plein écran) ↗
        </button>
      </div>
    </div>
  );
}
