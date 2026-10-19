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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full h-[94vh] max-w-[1440px] bg-white border border-[#E5E7EB] rounded-[2px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Control Bar */}
        <div className="h-14 shrink-0 bg-[#0A0B0E] text-white px-4 sm:px-6 flex items-center justify-between border-b border-black">
          {/* Left: Active identity */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-[#002FA7]"></span>
            <span className="text-xs font-mono-code uppercase tracking-wider text-gray-300 hidden sm:inline">
              Mode Inspection Grand Format :
            </span>
            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
              {activeItem.name}
            </span>
            <span className="hidden lg:inline bg-[#1A1D24] text-[#002FA7] border border-[#002FA7]/40 px-2 py-0.5 text-[10px] font-mono-code uppercase font-semibold">
              {activeItem.styleName}
            </span>
          </div>

          {/* Center: Device Switcher */}
          <div className="flex items-center gap-2 bg-[#1A1D24] p-1 border border-[#2D3139] rounded-[2px]">
            <button
              type="button"
              onClick={() => setDeviceMode("desktop")}
              className={`px-3 py-1 text-xs font-mono-code uppercase tracking-wider transition-colors cursor-pointer rounded-[2px] ${
                deviceMode === "desktop"
                  ? "bg-[#002FA7] text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Ordinateur (100%)
            </button>
            <button
              type="button"
              onClick={() => setDeviceMode("mobile")}
              className={`px-3 py-1 text-xs font-mono-code uppercase tracking-wider transition-colors cursor-pointer rounded-[2px] ${
                deviceMode === "mobile"
                  ? "bg-[#002FA7] text-white font-bold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Smartphone (390px)
            </button>
          </div>

          {/* Right: Quick switcher & Close */}
          <div className="flex items-center gap-3">
            <select
              value={activeId}
              onChange={(e) => onSelectId(e.target.value)}
              className="bg-[#1A1D24] border border-[#2D3139] text-white text-xs font-mono-code px-2.5 py-1.5 rounded-[2px] focus:outline-none focus:border-[#002FA7] hidden md:block"
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
              className="bg-[#2D3139] hover:bg-[#7A1C1C] text-white px-3.5 py-1.5 text-xs font-mono-code uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Fermer l&apos;aperçu</span>
              <span className="font-bold">×</span>
            </button>
          </div>
        </div>

        {/* Scrollable Preview Area */}
        <div className="flex-1 overflow-hidden bg-[#E5E7EB] flex items-center justify-center">
          {deviceMode === "desktop" ? (
            <div className="w-full h-full overflow-y-auto">
              {renderComponent(activeId)}
            </div>
          ) : (
            <div className="w-full h-full py-6 flex items-center justify-center overflow-hidden">
              {/* Phone Frame */}
              <div className="w-[390px] h-[95%] max-h-[780px] bg-white border-4 border-black rounded-[28px] shadow-2xl flex flex-col overflow-hidden relative">
                {/* Phone Notch */}
                <div className="h-6 bg-black w-36 mx-auto rounded-b-xl z-20 shrink-0"></div>
                {/* Phone Screen Scrollable Area */}
                <div className="flex-1 overflow-y-auto">
                  {renderComponent(activeId)}
                </div>
                {/* Home Indicator */}
                <div className="h-4 bg-white shrink-0 flex items-center justify-center">
                  <div className="w-28 h-1 bg-black/40 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
