"use client";

import React from "react";

interface HeaderProps {
  currentState: number; // 1, 2, 3
  onSelectState: (state: number) => void;
  onOpenContact: () => void;
}

export default function Header({
  currentState,
  onSelectState,
  onOpenContact,
}: HeaderProps) {
  const steps = [
    { num: 1, label: "01. NOTRE PROMESSE" },
    { num: 2, label: "02. SAVOIR-FAIRE CLÉ EN MAIN" },
    { num: 3, label: "03. ATELIER DES STYLES" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#FFFFFF]/95 backdrop-blur-xs border-b border-[#E5E7EB] z-40 px-4 sm:px-8 flex items-center justify-between select-none">
      {/* Left: Brand Identity */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => onSelectState(1)}
      >
        {/* Geometric Klein Blue Square SVG */}
        <div className="w-8 h-8 bg-[#002FA7] rounded-[2px] flex items-center justify-center p-1.5 shadow-xs">
          <svg viewBox="0 0 20 20" className="w-full h-full fill-white" fillRule="evenodd">
            {/* Architectural K Monogram */}
            <rect x="2" y="2" width="4" height="16" />
            <polygon points="17,2 11,10 8,7 8,2" />
            <polygon points="17,18 10,9 7,12 7,18" />
          </svg>
        </div>

        <div className="flex flex-col">
          <span className="font-extrabold text-base sm:text-lg tracking-[-0.03em] text-[#0A0B0E] leading-none">
            KREATIZ
          </span>
          <span className="font-mono-code text-[9px] uppercase tracking-[0.2em] text-[#4B5563] mt-0.5">
            Studio Web Artisanal
          </span>
        </div>
      </div>

      {/* Center: Interactive 3-State Progress Indicator */}
      <nav className="hidden md:flex items-center gap-1 sm:gap-2 font-mono-code text-xs">
        {steps.map((step, idx) => {
          const isActive = currentState === step.num;
          return (
            <React.Fragment key={step.num}>
              {idx > 0 && <span className="text-[#D1D5DB] px-1 font-light">—</span>}
              <button
                type="button"
                onClick={() => onSelectState(step.num)}
                className={`px-3 py-1.5 rounded-[2px] transition-all cursor-pointer relative ${
                  isActive
                    ? "text-[#002FA7] font-bold bg-[#002FA7]/8"
                    : "text-[#4B5563] hover:text-[#0A0B0E] hover:bg-gray-100/60"
                }`}
              >
                <span>{step.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#002FA7]"></span>
                )}
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      {/* Right: Commercial Action */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenContact}
          className="bg-[#002FA7] hover:bg-[#00227A] text-white px-4 py-2 text-xs font-mono-code uppercase font-semibold tracking-wider rounded-[2px] transition-colors cursor-pointer shadow-xs active:translate-y-px"
        >
          Discuter de votre commerce
        </button>
      </div>
    </header>
  );
}
