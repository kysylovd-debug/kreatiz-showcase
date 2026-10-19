"use client";

import React, { useRef, useState } from "react";
import { SHOWCASE_ITEMS, ShowcaseItem } from "./showcase/showcaseData";
import BoucherieRoche from "./showcase/BoucherieRoche";
import AtelierKoma from "./showcase/AtelierKoma";
import LeFeuillet from "./showcase/LeFeuillet";
import MieEtFarine from "./showcase/MieEtFarine";
import VisionnaireStudio from "./showcase/VisionnaireStudio";

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

  const dragStartX = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handlePrev = () => {
    onSelectIndex((currentIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onSelectIndex((currentIndex + 1) % total);
  };

  // Pointer drag to spin the orbital wheel
  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (dragStartX.current === null) return;
    const diff = e.clientX - dragStartX.current;
    if (Math.abs(diff) > 10) {
      setIsDragging(true);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX.current !== null) {
      const diff = e.clientX - dragStartX.current;
      if (diff > 45) {
        handlePrev();
      } else if (diff < -45) {
        handleNext();
      }
    }
    dragStartX.current = null;
    setTimeout(() => setIsDragging(false), 50);
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

  // Render miniature live website component inside each card
  const renderMiniSite = (id: string) => {
    switch (id) {
      case "boucherie-roche":
        return <BoucherieRoche />;
      case "atelier-koma":
        return <AtelierKoma />;
      case "le-feuillet":
        return <LeFeuillet />;
      case "mie-farine":
        return <MieEtFarine />;
      case "visionnaire":
        return <VisionnaireStudio />;
      default:
        return <BoucherieRoche />;
    }
  };

  const urls: { [key: string]: string } = {
    "boucherie-roche": "https://roche-boucherie.fr",
    "atelier-koma": "https://atelier-koma.ch",
    "le-feuillet": "https://lefeuillet-restaurant.fr",
    "mie-farine": "https://miefarine-fournil.fr",
    "visionnaire": "https://visionnaire-optique.fr",
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto select-none overflow-hidden">
      {/* Top Header of State 03 — Clean and Uncluttered without tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 font-mono-code text-xs text-[#002FA7] uppercase tracking-widest font-bold mb-1.5">
            <span className="w-2 h-2 bg-[#002FA7] rounded-[1px]"></span>
            <span>03 / ATELIER DES STYLES & SAVOIR-FAIRE</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-[-0.03em] text-[#0A0B0E]">
            Chaque commerce a une âme unique. Voici comment nous la révélons.
          </h2>
        </div>

        <div className="font-mono-code text-xs text-[#4B5563]">
          Glisser pour tourner • Cliquer sur la maquette pour explorer
        </div>
      </div>

      {/* 3D Circular / Orbital Carousel Container */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative w-full flex-1 my-auto flex items-center justify-center [perspective:1200px] min-h-[390px] max-h-[560px] cursor-grab active:cursor-grabbing"
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Style précédent"
          className="absolute left-2 sm:left-4 z-40 w-11 h-11 bg-white/95 hover:bg-[#002FA7] hover:text-white border border-[#E5E7EB] hover:border-[#002FA7] rounded-[2px] shadow-md flex items-center justify-center text-sm font-bold font-mono-code transition-all cursor-pointer active:scale-95"
        >
          ←
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Style suivant"
          className="absolute right-2 sm:right-4 z-40 w-11 h-11 bg-white/95 hover:bg-[#002FA7] hover:text-white border border-[#E5E7EB] hover:border-[#002FA7] rounded-[2px] shadow-md flex items-center justify-center text-sm font-bold font-mono-code transition-all cursor-pointer active:scale-95"
        >
          →
        </button>

        {/* The 5 Cards in Orbital Arrangement */}
        <div className="relative w-[92%] sm:w-[75%] lg:w-[68%] h-[92%] max-h-[480px] flex items-center justify-center">
          {SHOWCASE_ITEMS.map((item: ShowcaseItem, idx: number) => {
            const isCurrent = idx === currentIndex;
            const style = getCardStyle(idx);

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isDragging) return;
                  if (isCurrent) {
                    onOpenFullPreview(item.id);
                  } else {
                    onSelectIndex(idx);
                  }
                }}
                style={{
                  ...style,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease",
                }}
                className={`absolute inset-0 bg-[#FFFFFF] border rounded-[2px] flex flex-col overflow-hidden cursor-pointer group ${
                  isCurrent
                    ? "border-[#002FA7] shadow-2xl ring-1 ring-[#002FA7]/30"
                    : "border-[#E5E7EB] hover:border-gray-400"
                }`}
              >
                {/* Clean Browser Chrome Strip */}
                <div className="h-8 px-4 bg-[#F8F9FA] border-b border-[#E5E7EB] flex items-center justify-between font-mono-code text-[11px] shrink-0 z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E5E7EB]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#E5E7EB]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#E5E7EB]"></span>
                    <span className="ml-2 text-gray-500 font-sans hidden sm:inline">
                      {urls[item.id] || "https://kreatiz-client.fr"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#002FA7]">
                      {item.num}. {item.name}
                    </span>
                  </div>
                </div>

                {/* Direct Miniature View of the Real Page */}
                <div className="relative flex-1 w-full overflow-hidden bg-white">
                  <div
                    style={{
                      transform: "scale(0.55)",
                      transformOrigin: "top left",
                      width: "182%",
                      height: "182%",
                      pointerEvents: "none",
                    }}
                    className="overflow-hidden select-none"
                  >
                    {renderMiniSite(item.id)}
                  </div>

                  {/* Subtle Click-To-Open Overlay on Active Card */}
                  {isCurrent && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-end justify-between p-4 pointer-events-none">
                      <div className="bg-[#0A0B0E]/90 backdrop-blur-xs text-white px-3 py-1.5 rounded-[2px] font-mono-code text-[11px] uppercase tracking-wider shadow-md">
                        {item.styleName}
                      </div>

                      <div className="bg-[#002FA7] text-white px-3.5 py-1.5 rounded-[2px] font-mono-code text-[11px] uppercase tracking-wider font-semibold shadow-md flex items-center gap-1.5">
                        <span>Cliquer pour explorer</span>
                        <span>↗</span>
                      </div>
                    </div>
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
          <span>Commerce sélectionné :</span>
          <span className="text-black font-bold uppercase">{activeItem.name}</span>
          <span className="text-[#002FA7] font-semibold">({activeItem.styleName.split("—")[1]?.trim()})</span>
        </div>

        <button
          type="button"
          onClick={() => onOpenFullPreview(activeItem.id)}
          className="text-[#002FA7] hover:underline font-bold cursor-pointer"
        >
          Mode Grand Format ↗
        </button>
      </div>
    </div>
  );
}
