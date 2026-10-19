"use client";

import React, { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [shopName, setShopName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // keep open for confirmation
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setShopName("");
    setCity("");
    setPhone("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white border border-[#E5E7EB] rounded-[2px] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-black font-mono-code text-sm p-1.5 transition-colors cursor-pointer"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 mx-auto mb-4 bg-[#002FA7]/10 border border-[#002FA7] rounded-[2px] flex items-center justify-center text-[#002FA7]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#0A0B0E] mb-2">
              Demande bien reçue
            </h3>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed max-w-md mx-auto mb-6">
              Merci pour votre confiance. Un directeur de projet KREATIZ vous contactera au{" "}
              <span className="font-semibold text-black">{phone}</span> sous 24 heures pour échanger directement sur les besoins de <span className="font-semibold text-black">{shopName}</span> à <span className="font-semibold text-black">{city}</span>.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="bg-[#002FA7] hover:bg-[#00227A] text-white px-6 py-2.5 text-xs font-mono-code uppercase font-semibold tracking-wider rounded-[2px] transition-colors cursor-pointer"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-mono-code text-xs text-[#002FA7] uppercase tracking-widest font-semibold block mb-1">
                KREATIZ • Échange Direct & Gratuit
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0A0B0E]">
                Discuter de votre commerce
              </h2>
              <p className="text-xs text-[#4B5563] mt-1.5 leading-relaxed">
                Sans engagement, sans discours commercial préfabriqué. Nous étudions ensemble votre visibilité locale et le style adapté à votre clientèle.
              </p>
            </div>

            {/* Direct Contact Bar */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-3 bg-[#F8F9FA] border border-[#E5E7EB] rounded-[2px] text-xs font-mono-code">
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Téléphone direct</span>
                <span className="font-bold text-[#0A0B0E]">01 89 71 22 40</span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Email direct</span>
                <span className="font-bold text-[#002FA7]">bonjour@kreatiz.fr</span>
              </div>
            </div>

            {/* 3-Field Quick Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#4B5563] mb-1.5">
                  1. Nom de votre commerce
                </label>
                <input
                  type="text"
                  required
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  placeholder="ex: Boucherie des Halles, Salon Koma, Table du Port..."
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] p-2.5 text-xs font-sans rounded-[2px] focus:outline-none focus:border-[#002FA7]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#4B5563] mb-1.5">
                  2. Ville ou Code Postal
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="ex: Annecy, Lyon, Nantes, Bordeaux..."
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] p-2.5 text-xs font-sans rounded-[2px] focus:outline-none focus:border-[#002FA7]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#4B5563] mb-1.5">
                  3. Votre Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="ex: 06 12 34 56 78"
                  className="w-full bg-[#FFFFFF] border border-[#E5E7EB] p-2.5 text-xs font-sans rounded-[2px] focus:outline-none focus:border-[#002FA7]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#002FA7] hover:bg-[#00227A] text-white py-3 text-xs font-mono-code uppercase font-bold tracking-wider rounded-[2px] transition-colors cursor-pointer"
                >
                  Demander un appel de 10 min (gratuit)
                </button>
                <span className="block text-[10px] text-center text-gray-400 mt-2 font-mono-code">
                  Rappel sous 24h ouvrées • Zéro spam • Confidentialité garantie
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
