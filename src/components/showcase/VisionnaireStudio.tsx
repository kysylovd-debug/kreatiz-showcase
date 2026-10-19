"use client";

import React, { useState } from "react";

export default function VisionnaireStudio() {
  const [selectedFrame, setSelectedFrame] = useState<string>("kazuha");
  const [examType, setExamType] = useState<string>("stylisme");
  const [bookingDone, setBookingDone] = useState(false);

  const frames = [
    {
      id: "kazuha",
      name: "KAZUHA 01 — Tokyo Edition",
      specs: "51 □ 19 — 145",
      material: "Acétate Takiron Bio 8mm • Charnières 5 rivets",
      price: "340 €",
      colorTag: "Ambre Fumé & Titane",
      weight: "19 grammes",
      designedIn: "Fukui, Japon",
    },
    {
      id: "kronos",
      name: "KRONOS GEO — Berlin Minimal",
      specs: "49 □ 21 — 140",
      material: "Titane chirurgical brossé 0.6mm sans vis",
      price: "410 €",
      colorTag: "Noir Carbone Mat",
      weight: "11 grammes",
      designedIn: "Berlin, Allemagne",
    },
    {
      id: "vortex",
      name: "VORTEX ARCH — Studio Cut",
      specs: "53 □ 18 — 145",
      material: "Acétate recyclé biseauté à 45° et inserts cobalt",
      price: "295 €",
      colorTag: "Écaille Brute & Bleu Électrique",
      weight: "22 grammes",
      designedIn: "Jura, France",
    },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingDone(true);
    setTimeout(() => setBookingDone(false), 4000);
  };

  const currentFrameObj = frames.find((f) => f.id === selectedFrame) || frames[0];

  return (
    <div className="w-full bg-[#E6E8EC] text-[#000000] font-space selection:bg-[#FACC15] selection:text-black pb-24">
      {/* Neo-brutalist Ticker Banner */}
      <div className="bg-[#000000] text-[#FACC15] px-6 py-2.5 text-xs font-mono-code uppercase font-bold flex justify-between items-center tracking-wider border-b-2 border-black">
        <span>● ATELIER D&apos;OPTIQUE INDÉPENDANT</span>
        <span className="hidden sm:inline">VERRES FRANÇAIS ESSILOR / SEIKO • MONTAGE SUR PLACE EN 1H</span>
        <span>LABORATOIRE CERTIFIÉ ISO 9001</span>
      </div>

      {/* Main Studio Header */}
      <header className="px-6 sm:px-12 py-8 border-b-2 border-black bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FACC15] border-2 border-black flex items-center justify-center font-syne font-black text-2xl shadow-[3px_3px_0px_#000000]">
            V
          </div>
          <div>
            <h1 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tighter leading-none">
              VISIONNAIRE <span className="text-[#1D4ED8]">STUDIO</span>
            </h1>
            <p className="font-mono-code text-[11px] uppercase tracking-widest text-[#4B5563] mt-1">
              Lunetterie Singulière • Mesures Oculaires 3D • Ateliers de Créateurs
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#1D4ED8] text-white px-4 py-2 border-2 border-black font-mono-code text-xs font-bold uppercase shadow-[3px_3px_0px_#000000]">
            Bilan Réfractif 0.01 Dioptrie
          </div>
          <a
            href="#rdv-optique"
            className="bg-[#FACC15] hover:bg-yellow-400 text-black px-5 py-2 border-2 border-black font-mono-code text-xs font-bold uppercase shadow-[3px_3px_0px_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5"
          >
            Prendre RDV
          </a>
        </div>
      </header>

      {/* Hero Showcase with Blueprint Specs */}
      <section className="px-6 sm:px-12 py-16 border-b-2 border-black bg-[#E6E8EC]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Hero Statement */}
          <div className="lg:col-span-7 bg-white border-2 border-black p-8 sm:p-10 shadow-[6px_6px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#1D4ED8] text-white font-mono-code text-[11px] font-bold px-3 py-1 uppercase tracking-wider mb-6">
                Manifeste Optique
              </div>
              <h2 className="font-syne font-extrabold text-3xl sm:text-5xl uppercase tracking-tight leading-[1.05] mb-6">
                Vos yeux méritent mieux que des logos industriels.
              </h2>
              <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-6">
                Nous sélectionnons exclusivement des ateliers familiaux au Japon, en France et en Allemagne qui façonnent des montures numérotées en séries limitées. Zéro compromis sur la matière : acétates biodégradables affinés pendant six mois et titanes aéronautiques hypoallergéniques.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 border-2 border-black p-4 bg-[#F8FAFC] font-mono-code text-center text-xs">
              <div>
                <div className="font-syne font-black text-xl text-[#1D4ED8]">100%</div>
                <div className="text-[10px] text-gray-500 uppercase">Créateurs Indépendants</div>
              </div>
              <div className="border-x-2 border-black">
                <div className="font-syne font-black text-xl text-[#000000]">60 MIN</div>
                <div className="text-[10px] text-gray-500 uppercase">Montage Express</div>
              </div>
              <div>
                <div className="font-syne font-black text-xl text-[#1D4ED8]">3 ANS</div>
                <div className="text-[10px] text-gray-500 uppercase">Garantie Casse Totale</div>
              </div>
            </div>
          </div>

          {/* Right Technical Eyewear Blueprint SVG */}
          <div className="lg:col-span-5 bg-[#FACC15] border-2 border-black p-8 shadow-[6px_6px_0px_#000000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6 font-mono-code text-xs font-bold">
                <span>SCHÉMA TECHNIQUE D&apos;ATELIER</span>
                <span>COTATION EN MM</span>
              </div>

              {/* Technical Drawing SVG */}
              <div className="bg-white border-2 border-black p-4 mb-6 shadow-[3px_3px_0px_#000000]">
                <svg viewBox="0 0 320 160" className="w-full h-auto" fill="none" stroke="#000000" strokeWidth="2.5">
                  {/* Left Rim */}
                  <rect x="35" y="45" width="95" height="70" rx="14" fill="#E6E8EC" />
                  {/* Right Rim */}
                  <rect x="190" y="45" width="95" height="70" rx="14" fill="#E6E8EC" />
                  {/* Keyhole Bridge */}
                  <path d="M 130 65 Q 160 55 190 65" strokeWidth="3" />
                  <path d="M 140 75 Q 160 85 180 75" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Temples */}
                  <line x1="35" y1="55" x2="15" y2="50" strokeWidth="3" />
                  <line x1="285" y1="55" x2="305" y2="50" strokeWidth="3" />
                  {/* Millimeter Callouts */}
                  <line x1="35" y1="125" x2="130" y2="125" stroke="#1D4ED8" strokeWidth="1.5" />
                  <text x="82" y="137" fill="#1D4ED8" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                    CALIBRE 51 MM
                  </text>
                  <line x1="130" y1="35" x2="190" y2="35" stroke="#1D4ED8" strokeWidth="1.5" />
                  <text x="160" y="30" fill="#1D4ED8" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                    PONT 19 MM
                  </text>
                </svg>
              </div>

              <div className="bg-black text-white p-4 font-mono-code text-xs border border-black space-y-1">
                <div className="text-[#FACC15] font-bold">MONTURE ACTIVE : {currentFrameObj.name}</div>
                <div className="text-gray-300">Dimensions normalisées : {currentFrameObj.specs}</div>
                <div className="text-gray-300">Poids sur nez : {currentFrameObj.weight}</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black flex justify-between font-mono-code text-xs font-bold">
              <span>{currentFrameObj.designedIn}</span>
              <span className="text-[#1D4ED8] bg-white px-2 py-0.5 border border-black">
                {currentFrameObj.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Selection Table */}
      <section className="px-6 sm:px-12 py-16 border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b-2 border-black gap-4">
            <div>
              <span className="font-mono-code text-xs font-bold text-[#1D4ED8] uppercase tracking-widest">
                Sélection Limitée de l&apos;Atelier
              </span>
              <h3 className="font-syne font-black text-3xl uppercase tracking-tight mt-1">
                Trois Pièces Remarquables
              </h3>
            </div>
            <span className="font-mono-code text-xs text-gray-600">
              Chaque monture est essayable en boutique
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {frames.map((frame) => {
              const isSelected = selectedFrame === frame.id;
              return (
                <div
                  key={frame.id}
                  onClick={() => setSelectedFrame(frame.id)}
                  className={`p-6 border-2 border-black transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#FFFFFF] shadow-[6px_6px_0px_#1D4ED8] -translate-y-1"
                      : "bg-[#FFFFFF] shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[#E6E8EC] border border-black font-mono-code text-[10px] font-bold px-2 py-0.5 uppercase">
                        {frame.designedIn}
                      </span>
                      <span className="font-mono-code text-sm font-bold text-[#1D4ED8]">
                        {frame.price}
                      </span>
                    </div>

                    <h4 className="font-syne font-bold text-lg uppercase mb-2">{frame.name}</h4>
                    <p className="font-mono-code text-xs text-gray-600 mb-4">{frame.material}</p>
                    <div className="text-xs font-mono-code text-black bg-[#F8FAFC] border border-black p-2 mb-4">
                      <div>📐 Cotes : {frame.specs}</div>
                      <div>🎨 Teinte : {frame.colorTag}</div>
                      <div>⚖️ Poids : {frame.weight}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-black flex items-center justify-between font-mono-code text-xs font-bold">
                    <span className={isSelected ? "text-[#1D4ED8]" : "text-gray-500"}>
                      {isSelected ? "● Affiché sur le schéma" : "○ Cliquer pour inspecter"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Appointment Module */}
      <section id="rdv-optique" className="px-6 sm:px-12 py-16 bg-[#FFFFFF] border-b-2 border-black">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-black p-8 sm:p-10 shadow-[6px_6px_0px_#000000] bg-[#F8FAFC]">
            <div className="mb-8 pb-4 border-b-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono-code text-xs font-bold text-[#1D4ED8] uppercase">
                  Service Sur-Mesure
                </span>
                <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight">
                  Prise de Rendez-vous en Atelier
                </h3>
              </div>
              <div className="font-mono-code text-xs bg-[#FACC15] border border-black px-3 py-1 font-bold">
                Sans avance de frais • Tiers Payant Mutuelle
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block font-mono-code text-xs font-bold uppercase mb-3">
                  Motif de votre venue :
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    ["stylisme", "Diagnostic Morphologie & Choix Monture"],
                    ["examen", "Bilan Réfractif Oculaire (40 min)"],
                    ["ajustement", "Ajustement & Entretien Atelier (Offert)"],
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
                    Votre Nom & Prénom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Marc Vanhove"
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
                    placeholder="ex: 06 45 89 12 34"
                    className="w-full bg-white border-2 border-black p-3 font-mono-code text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono-code text-xs text-gray-600">
                  Rendez-vous privatif avec notre opticien diplômé d&apos;État.
                </span>

                {bookingDone ? (
                  <div className="bg-[#1D4ED8] text-white px-6 py-3 font-mono-code text-xs font-bold border-2 border-black uppercase shadow-[3px_3px_0px_#000000]">
                    ✓ Rendez-vous programmé. SMS récapitulatif envoyé.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#FACC15] hover:bg-yellow-400 text-black border-2 border-black px-8 py-3.5 font-mono-code text-xs font-black uppercase tracking-wider shadow-[4px_4px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                  >
                    Valider le Rendez-Vous
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Optical Studio Footer */}
      <footer className="max-w-6xl mx-auto px-6 sm:px-12 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 font-mono-code text-xs">
        <div className="p-4 border-2 border-black bg-white shadow-[3px_3px_0px_#000000]">
          <h5 className="font-bold uppercase mb-2 text-[#1D4ED8]">L&apos;Atelier Lunetier</h5>
          <p className="text-gray-700 leading-relaxed">
            Visionnaire Studio<br />
            29, Rue de la République<br />
            69002 Lyon (Presqu&apos;île)
          </p>
        </div>
        <div className="p-4 border-2 border-black bg-white shadow-[3px_3px_0px_#000000]">
          <h5 className="font-bold uppercase mb-2 text-[#1D4ED8]">Horaires d&apos;Ouverture</h5>
          <p className="text-gray-700 leading-relaxed">
            Mardi au Samedi : 10h00 — 19h00 non-stop<br />
            Lundi : Sur rendez-vous uniquement<br />
            Dimanche : Fermé
          </p>
        </div>
        <div className="p-4 border-2 border-black bg-white shadow-[3px_3px_0px_#000000]">
          <h5 className="font-bold uppercase mb-2 text-[#1D4ED8]">Ligne Directe</h5>
          <p className="text-gray-700 leading-relaxed">
            Tél : 04 78 42 19 88<br />
            Email : contact@visionnaire-optique.fr<br />
            Agréé toutes mutuelles & Sécurité Sociale
          </p>
        </div>
      </footer>
    </div>
  );
}
