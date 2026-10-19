"use client";

import React, { useState } from "react";

export default function VisionnaireStudio() {
  const [selectedFrame, setSelectedFrame] = useState<string>("kazuha");
  const [examType, setExamType] = useState<string>("bilan");
  const [booked, setBooked] = useState(false);

  const frames = [
    {
      id: "kazuha",
      name: "KAZUHA 01 — Tokyo Atelier",
      calibre: "51 mm",
      bridge: "19 mm",
      temple: "145 mm",
      material: "Acétate Takiron Bio 8mm • Charnières 5 rivets",
      price: "340 €",
      colorTag: "Ambre Fumé & Titane Brossé",
      weight: "18.5 g",
      origin: "Fukui, Japon",
      description: "Monture sculptée dans un bloc d'acétate végétal vieilli 6 mois. Biseautage franc et poli main au touret de drap.",
    },
    {
      id: "kronos",
      name: "KRONOS GEO — Berlin Minimal",
      calibre: "49 mm",
      bridge: "21 mm",
      temple: "140 mm",
      material: "Titane chirurgical brossé 0.6mm sans vis",
      price: "410 €",
      colorTag: "Noir Carbone Mat",
      weight: "11.2 g",
      origin: "Berlin, Allemagne",
      description: "Découpe laser micrométrique et pliage architectural d'une seule feuille de titane aérospatial hypoallergénique.",
    },
    {
      id: "vortex",
      name: "VORTEX ARCH — Studio Cut",
      calibre: "53 mm",
      bridge: "18 mm",
      temple: "145 mm",
      material: "Acétate régénéré biseauté à 45° & inserts cobalt",
      price: "295 €",
      colorTag: "Écaille Brute & Bleu Électrique",
      weight: "21.0 g",
      origin: "Morez, Jura",
      description: "Géométrie pentagonale appuyée, pont clé rétro-éclairé et gravure millimétrée des coordonnées géographiques de l'atelier.",
    },
  ];

  const currentFrame = frames.find((f) => f.id === selectedFrame) || frames[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 4000);
  };

  return (
    <div className="w-full bg-[#E6E8EC] text-[#000000] font-space selection:bg-[#FACC15] selection:text-black pb-28">
      {/* Industrial Neo-brutalist Ticker Banner */}
      <div className="bg-[#000000] text-[#FACC15] px-6 py-2.5 text-xs font-mono-code uppercase font-bold flex flex-wrap justify-between items-center border-b-2 border-black gap-2">
        <span>● VISIONNAIRE STUDIO — OPTIQUE INDÉPENDANTE</span>
        <span className="hidden md:inline">LABORATOIRE CERTIFIÉ • MONTAGE SUR PLACE EN 1H</span>
        <span>LYON PRESQU&apos;ÎLE</span>
      </div>

      {/* Main Studio Brand Header */}
      <header className="px-6 sm:px-12 py-8 bg-[#FFFFFF] border-b-2 border-black flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FACC15] border-2 border-black flex items-center justify-center font-syne font-black text-2xl shadow-[3px_3px_0px_#000000]">
            V
          </div>
          <div>
            <h1 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
              VISIONNAIRE <span className="text-[#1D4ED8]">STUDIO</span>
            </h1>
            <p className="font-mono-code text-[11px] uppercase tracking-widest text-[#4B5563] mt-1">
              Lunetterie de Créateurs • Mesures 3D • Verres Haute Précision
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 font-mono-code text-xs font-bold">
          <a
            href="#bilan"
            className="bg-[#FACC15] hover:bg-yellow-400 text-black px-6 py-2.5 border-2 border-black uppercase shadow-[3px_3px_0px_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
          >
            Prendre Rendez-vous
          </a>
        </div>
      </header>

      {/* Hero Poster Section */}
      <section className="px-6 sm:px-12 py-16 max-w-6xl mx-auto">
        <div className="bg-white border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_#000000] mb-12">
          <div className="inline-block bg-[#1D4ED8] text-white font-mono-code text-xs font-bold px-3 py-1 uppercase tracking-wider mb-6">
            Manifeste d&apos;Atelier
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-6xl uppercase tracking-tight leading-[1.02] mb-6">
            Des montures d&apos;auteurs.<br />
            <span className="text-[#1D4ED8]">Zéro logo industriel.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#374151] max-w-3xl leading-relaxed mb-8">
            Nous refusons les licences de marques de mode qui vendent du plastique injecté. Chaque monture de notre collection est dessinée par un créateur indépendant et façonnée à la main en séries de 150 à 300 exemplaires numérotés.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t-2 border-black pt-6 font-mono-code text-xs">
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Origines</span>
              <span className="font-bold">Japon • France • Allemagne</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Réfraction</span>
              <span className="font-bold text-[#1D4ED8]">Précision 0.01 Dioptrie</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Montage</span>
              <span className="font-bold">Façonné en atelier 1H</span>
            </div>
            <div>
              <span className="text-gray-500 block text-[10px] uppercase">Prise en charge</span>
              <span className="font-bold">Toutes mutuelles</span>
            </div>
          </div>
        </div>

        {/* Technical Blueprint Workspace Interactive Station */}
        <div className="bg-[#FFFFFF] border-2 border-black shadow-[8px_8px_0px_#000000] overflow-hidden mb-16">
          <div className="bg-[#000000] text-white p-4 flex flex-wrap items-center justify-between font-mono-code text-xs gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-[#FACC15]">
                Établi Virtuel d&apos;Atelier :
              </span>
              <span>Inspection Technique Millimétrique</span>
            </div>

            {/* Frame Selector Pills */}
            <div className="flex items-center gap-2">
              {frames.map((frame) => (
                <button
                  key={frame.id}
                  type="button"
                  onClick={() => setSelectedFrame(frame.id)}
                  className={`px-3 py-1 text-xs uppercase font-mono-code transition-colors cursor-pointer ${
                    selectedFrame === frame.id
                      ? "bg-[#1D4ED8] text-white font-bold"
                      : "bg-[#1A1A1A] text-gray-300 hover:text-white"
                  }`}
                >
                  {frame.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Blueprint Graphic SVG */}
            <div className="lg:col-span-7 bg-[#F4F5F7] border-2 border-black p-6 relative">
              <div className="flex justify-between items-center text-[10px] font-mono-code uppercase text-gray-500 mb-4 border-b border-gray-300 pb-2">
                <span>RÉF : {currentFrame.id.toUpperCase()}-2026</span>
                <span className="text-[#1D4ED8] font-bold">ÉCHELLE 1:1 REPRODUCTION</span>
              </div>

              {/* Vector Blueprint with precise caliper dimensions */}
              <svg viewBox="0 0 340 180" className="w-full h-auto" fill="none" stroke="#000000">
                {/* Grid guidelines */}
                <line x1="20" y1="90" x2="320" y2="90" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="170" y1="20" x2="170" y2="160" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* Left Lens Rim */}
                <rect x="40" y="50" width="105" height="75" rx="16" strokeWidth="2.5" fill="#FFFFFF" />
                <circle cx="92" cy="87" r="2.5" fill="#1D4ED8" />

                {/* Right Lens Rim */}
                <rect x="195" y="50" width="105" height="75" rx="16" strokeWidth="2.5" fill="#FFFFFF" />
                <circle cx="247" cy="87" r="2.5" fill="#1D4ED8" />

                {/* Bridge */}
                <path d="M 145 74 Q 170 60 195 74" strokeWidth="3" />
                <path d="M 152 84 Q 170 76 188 84" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Temples (Branches) */}
                <path d="M 40 65 L 15 58" strokeWidth="3" strokeLinecap="round" />
                <path d="M 300 65 L 325 58" strokeWidth="3" strokeLinecap="round" />

                {/* Caliper 1: Lens width callout */}
                <line x1="40" y1="140" x2="145" y2="140" stroke="#1D4ED8" strokeWidth="1.5" />
                <line x1="40" y1="135" x2="40" y2="145" stroke="#1D4ED8" strokeWidth="1.5" />
                <line x1="145" y1="135" x2="145" y2="145" stroke="#1D4ED8" strokeWidth="1.5" />
                <text x="92" y="153" fill="#1D4ED8" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                  CALIBRE {currentFrame.calibre}
                </text>

                {/* Caliper 2: Bridge width callout */}
                <line x1="145" y1="40" x2="195" y2="40" stroke="#1D4ED8" strokeWidth="1.5" />
                <line x1="145" y1="36" x2="145" y2="44" stroke="#1D4ED8" strokeWidth="1.5" />
                <line x1="195" y1="36" x2="195" y2="44" stroke="#1D4ED8" strokeWidth="1.5" />
                <text x="170" y="32" fill="#1D4ED8" fontSize="9" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                  PONT {currentFrame.bridge}
                </text>
              </svg>
            </div>

            {/* Right Spec Sheet */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="bg-[#FACC15] text-black font-mono-code text-[11px] font-bold px-2 py-0.5 border border-black uppercase">
                  {currentFrame.origin}
                </span>
                <h3 className="font-syne font-black text-2xl uppercase mt-2 text-black">
                  {currentFrame.name}
                </h3>
                <div className="text-xl font-mono-code font-bold text-[#1D4ED8] mt-1">
                  {currentFrame.price}
                </div>
              </div>

              <p className="text-xs text-[#374151] leading-relaxed">
                {currentFrame.description}
              </p>

              <div className="bg-[#F4F5F7] border border-black p-4 font-mono-code text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Matière principale :</span>
                  <span className="font-bold text-right">{currentFrame.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Poids sur nez :</span>
                  <span className="font-bold">{currentFrame.weight}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Coloris :</span>
                  <span className="font-bold">{currentFrame.colorTag}</span>
                </div>
              </div>

              <a
                href="#bilan"
                className="block text-center bg-[#000000] hover:bg-[#1D4ED8] text-white py-3 font-mono-code text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
              >
                Réserver pour essayage en boutique
              </a>
            </div>
          </div>
        </div>

        {/* Appointment Section */}
        <div id="bilan" className="bg-[#FFFFFF] border-2 border-black p-8 sm:p-12 shadow-[8px_8px_0px_#000000]">
          <div className="mb-8 pb-4 border-b-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono-code text-xs font-bold text-[#1D4ED8] uppercase">
                Laboratoire Optique & Morphologie
              </span>
              <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight">
                Prendre Rendez-vous en Atelier
              </h3>
            </div>
            <div className="font-mono-code text-xs bg-[#FACC15] border border-black px-3 py-1 font-bold">
              Sans avance de frais • Tiers Payant Mutuelle
            </div>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label className="block font-mono-code text-xs font-bold uppercase mb-3">
                Motif de consultation :
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["bilan", "Bilan Réfractif Haute Définition (40 min)"],
                  ["stylisme", "Diagnostic Stylisme & Morphologie Visage"],
                  ["ajustement", "Ajustement & Entretien sur-mesure (Offert)"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setExamType(key)}
                    className={`p-3 text-xs font-mono-code text-left border-2 border-black font-semibold transition-all cursor-pointer ${
                      examType === key
                        ? "bg-[#1D4ED8] text-white shadow-[3px_3px_0px_#000000]"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono-code text-xs font-bold uppercase mb-2">
                  Nom & Prénom
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Alexandre Dumas"
                  className="w-full bg-white border-2 border-black p-3 font-mono-code text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block font-mono-code text-xs font-bold uppercase mb-2">
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="ex: 06 12 34 56 78"
                  className="w-full bg-white border-2 border-black p-3 font-mono-code text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                />
              </div>
            </div>

            <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono-code text-xs text-gray-600">
                Accueil individuel sans attente par notre opticien diplômé d&apos;État.
              </span>

              {booked ? (
                <div className="bg-[#1D4ED8] text-white px-6 py-3 font-mono-code text-xs font-bold border-2 border-black uppercase shadow-[3px_3px_0px_#000000]">
                  ✓ Rendez-vous confirmé. SMS de rappel envoyé.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#FACC15] hover:bg-yellow-400 text-black border-2 border-black px-8 py-3.5 font-mono-code text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                  Confirmer le rendez-vous
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 sm:px-12 pt-8 text-center font-mono-code text-xs text-gray-600">
        Visionnaire Studio • 29, Rue de la République, 69002 Lyon Presqu&apos;île • 04 78 42 19 88
      </footer>
    </div>
  );
}
