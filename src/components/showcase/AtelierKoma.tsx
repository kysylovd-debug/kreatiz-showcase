"use client";

import React, { useState } from "react";

export default function AtelierKoma() {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<string>("Mercredi 22 Octobre");
  const [selectedHour, setSelectedHour] = useState<string>("14:30");
  const [confirmed, setConfirmed] = useState(false);

  const services = [
    {
      num: "01",
      title: "Coupe Signature & Architecture",
      time: "45 min",
      price: "68 CHF",
      details: "Analyse morphologique, coupe de précision aux ciseaux japonais, coiffage texturé naturel.",
    },
    {
      num: "02",
      title: "Rituel Barbe & Serviette Chaude",
      time: "40 min",
      price: "52 CHF",
      details: "Traçage à la lame droite, préparation à l'huile végétale tiède et vapeur d'eucalyptus.",
    },
    {
      num: "03",
      title: "Protocole Intégral Cheveux & Barbe",
      time: "75 min",
      price: "110 CHF",
      details: "Soin complet sur-mesure associé à un massage crânien décontractant de quinze minutes.",
    },
    {
      num: "04",
      title: "Bain Végétal Profond & Argile",
      time: "30 min",
      price: "45 CHF",
      details: "Purification du cuir chevelu sous cloche de micro-vapeur et huiles essentielles suisses.",
    },
  ];

  const handleBook = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 4000);
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#000000] font-instrument selection:bg-[#000000] selection:text-[#FFFFFF] pb-24">
      {/* Top Minimal Coordinate Strip */}
      <div className="border-b border-[#EAEAEA] px-8 py-3.5 flex items-center justify-between text-[11px] font-mono-code tracking-[0.25em] text-[#71717A] uppercase">
        <span>46.5197° N, 6.6323° E</span>
        <span>Atelier Koma — Lausanne</span>
        <span className="hidden sm:inline">Un Hôte à la Fois</span>
      </div>

      {/* Hero — Pure Typographic Swiss Architecture */}
      <section className="px-8 sm:px-16 pt-24 pb-20 border-b border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-mono-code tracking-[0.3em] uppercase text-[#71717A] block mb-8">
            Salon d&apos;Auteur & Espace de Silence
          </span>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-extralight tracking-[-0.04em] leading-[0.98] text-black max-w-4xl">
            L&apos;art de soustraire pour révéler la{" "}
            <span className="font-normal italic">ligne pure</span>.
          </h1>
          <div className="mt-12 pt-8 border-t border-[#EAEAEA] flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-sm sm:text-base text-[#52525B] font-light leading-relaxed max-w-lg">
              Dans un espace épuré baigné de lumière naturelle, chaque geste est mesuré. Nous n’appliquons pas de modèle : nous dialoguons avec la matière de vos cheveux et l’ossature de votre visage.
            </p>
            <div className="text-xs font-mono-code text-[#71717A] uppercase tracking-widest text-right">
              Acier Japonais 440C • Soins Biologiques
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Left Services / Right Booking */}
      <section className="px-8 sm:px-16 py-20 border-b border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Minimal Service List */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-[11px] font-mono-code uppercase tracking-[0.3em] text-[#71717A] block mb-2">
                01 / Prestations & Tarifs
              </span>
              <h2 className="text-2xl font-light tracking-tight">Le Barème de l&apos;Atelier</h2>
            </div>

            <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA]">
              {services.map((item, idx) => {
                const isSelected = selectedService === idx;
                return (
                  <div
                    key={item.num}
                    onClick={() => setSelectedService(idx)}
                    className={`py-6 cursor-pointer transition-colors group flex items-start justify-between gap-6 ${
                      isSelected ? "bg-[#FAFAFA]" : "hover:bg-[#FAFAFA]/60"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono-code text-[#A1A1AA] pt-1">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="text-lg font-normal text-black group-hover:underline decoration-1 underline-offset-4">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#71717A] font-light mt-1.5 leading-relaxed max-w-md">
                          {item.details}
                        </p>
                        <span className="text-[10px] font-mono-code text-[#A1A1AA] uppercase tracking-wider mt-2 inline-block">
                          Durée : {item.time}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-base font-light text-black block">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-[#A1A1AA] uppercase font-mono-code">
                        {isSelected ? "Sélectionné" : "Choisir"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Interactive Schedule */}
          <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-[0.3em] text-[#71717A] block mb-2">
                02 / Agenda en Direct
              </span>
              <h3 className="text-xl font-light mb-6">Réserver votre venue</h3>

              {/* Selected Service Card */}
              <div className="border border-[#EAEAEA] bg-white p-4 mb-6">
                <span className="text-[10px] font-mono-code text-[#71717A] uppercase block mb-1">
                  Soin retenu :
                </span>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-normal text-black">
                    {services[selectedService].title}
                  </span>
                  <span className="text-sm font-light text-black">
                    {services[selectedService].price}
                  </span>
                </div>
              </div>

              {/* Day Selector */}
              <div className="mb-6">
                <label className="block text-[10px] font-mono-code uppercase tracking-wider text-[#71717A] mb-2">
                  Journée
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["Mardi 21", "Mercredi 22", "Jeudi 23"].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day + " Octobre")}
                      className={`p-2.5 text-center transition-colors cursor-pointer border ${
                        selectedDay.startsWith(day)
                          ? "bg-black text-white border-black"
                          : "bg-white text-[#52525B] border-[#EAEAEA] hover:border-black"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-8">
                <label className="block text-[10px] font-mono-code uppercase tracking-wider text-[#71717A] mb-2">
                  Heure du rendez-vous
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono-code">
                  {["09:30", "11:00", "14:30", "16:00", "17:45", "19:00"].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedHour(slot)}
                      className={`py-2 text-center transition-colors cursor-pointer border ${
                        selectedHour === slot
                          ? "bg-black text-white border-black font-semibold"
                          : "bg-white text-[#52525B] border-[#EAEAEA] hover:border-black"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {confirmed ? (
                <div className="bg-black text-white p-3.5 text-center text-xs tracking-widest uppercase font-mono-code">
                  ✓ Rendez-vous confirmé pour {selectedHour}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleBook}
                  className="w-full bg-black hover:bg-[#27272A] text-white py-3.5 text-xs font-mono-code uppercase tracking-[0.2em] font-light transition-colors cursor-pointer"
                >
                  Confirmer le créneau
                </button>
              )}
              <span className="block text-[10px] text-center text-[#A1A1AA] mt-2 font-mono-code">
                Rue Centrale 18, Lausanne • Métro Riponne
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="max-w-5xl mx-auto px-8 sm:px-16 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light text-[#52525B]">
        <div>
          <span className="font-mono-code text-[10px] text-black uppercase tracking-widest block mb-2">Espace & Calme</span>
          <p>Un seul client accueilli par tranche horaire pour une écoute sans concession.</p>
        </div>
        <div>
          <span className="font-mono-code text-[10px] text-black uppercase tracking-widest block mb-2">Horaires</span>
          <p>Mardi au Vendredi 09h00—19h30<br />Samedi 08h30—18h00</p>
        </div>
        <div>
          <span className="font-mono-code text-[10px] text-black uppercase tracking-widest block mb-2">Contact</span>
          <p>+41 21 312 88 40<br />lausanne@atelierkoma.ch</p>
        </div>
      </footer>
    </div>
  );
}
