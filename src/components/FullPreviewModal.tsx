"use client";

import React, { useState, useEffect } from "react";
import { SHOWCASE_ITEMS, ShowcaseItem } from "./showcase/showcaseData";
import BoucherieRoche from "./showcase/BoucherieRoche";
import AtelierKoma from "./showcase/AtelierKoma";
import LeFeuillet from "./showcase/LeFeuillet";
import MieEtFarine from "./showcase/MieEtFarine";
import VisionnaireStudio from "./showcase/VisionnaireStudio";

interface FullPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
  onSelectId: (id: string) => void;
}

export default function FullPreviewModal({
  isOpen,
  onClose,
  activeId,
  onSelectId,
}: FullPreviewModalProps) {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeItem = SHOWCASE_ITEMS.find((item) => item.id === activeId) || SHOWCASE_ITEMS[0];

  const renderComponent = (id: string) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/70 backdrop-blur-xs">
      <div className="relative w-full h-[95vh] max-w-[1440px] bg-white border border-[#E5E7EB] rounded-[2px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in duration-200">
        {/* Top Control Bar — Clean & Minimal */}
        <div className="h-12 shrink-0 bg-[#0A0B0E] text-white px-4 sm:px-6 flex items-center justify-between border-b border-black">
          {/* Left: Active shop name */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-[1px] bg-[#002FA7]"></span>
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
              {activeItem.name}
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 font-mono-code">
              ({activeItem.sector.split(",")[0]})
            </span>
          </div>

          {/* Center: Clean Device Switcher */}
          <div className="flex items-center bg-[#1A1D24] p-0.5 border border-[#2D3139] rounded-[2px] text-xs font-mono-code">
            <button
              type="button"
              onClick={() => setDeviceMode("desktop")}
              className={`px-3 py-1 rounded-[1px] transition-colors cursor-pointer ${
                deviceMode === "desktop"
                  ? "bg-[#002FA7] text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Ordinateur
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode("mobile")}
              className={`px-3 py-1 rounded-[1px] transition-colors cursor-pointer ${
                deviceMode === "mobile"
                  ? "bg-[#002FA7] text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Smartphone (375px)
            </button>
          </div>

          {/* Right: Quick switcher dropdown & Close */}
          <div className="flex items-center gap-3">
            <select
              value={activeId}
              onChange={(e) => onSelectId(e.target.value)}
              className="bg-[#1A1D24] border border-[#2D3139] text-white text-xs font-mono-code px-2 py-1 rounded-[2px] focus:outline-none focus:border-[#002FA7] hidden md:block"
            >
              {SHOWCASE_ITEMS.map((item: ShowcaseItem) => (
                <option key={item.id} value={item.id}>
                  {item.num}. {item.name}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer l'aperçu"
              className="bg-[#1A1D24] hover:bg-[#7A1C1C] text-white px-3 py-1 text-xs font-mono-code uppercase rounded-[2px] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Fermer</span>
              <span className="font-bold text-sm leading-none">×</span>
            </button>
          </div>
        </div>

        {/* Scrollable Viewport */}
        <div className="flex-1 overflow-hidden bg-[#ECEEF2] flex items-center justify-center">
          {deviceMode === "desktop" ? (
            <div className="w-full h-full overflow-y-auto">
              {renderComponent(activeId)}
            </div>
          ) : (
            <div className="w-full h-full py-4 flex items-center justify-center overflow-hidden">
              {/* Clean Smartphone Frame without fake notch */}
              <div className="w-[375px] h-[96%] max-h-[760px] bg-white border border-[#CBD5E1] rounded-[4px] shadow-2xl flex flex-col overflow-hidden">
                {/* Minimal Status Strip */}
                <div className="h-6 bg-[#0A0B0E] text-white px-4 flex items-center justify-between text-[10px] font-mono-code shrink-0">
                  <span>09:41</span>
                  <span>5G • 100%</span>
                </div>
                {/* Scrollable Screen */}
                <div className="flex-1 overflow-y-auto">
                  {renderComponent(activeId)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
