"use client";

import React, { useState } from "react";

export default function AtelierKoma() {
  const [selectedService, setSelectedService] = useState<string>("coupe-signature");
  const [selectedDate, setSelectedDate] = useState<string>("Mercredi 22 Octobre");
  const [selectedSlot, setSelectedSlot] = useState<string>("14:30");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const services = [
    {
      id: "coupe-signature",
      title: "Coupe Signature & Architecture Texturée",
      duration: "45 minutes",
      price: "68 CHF",
      desc: "Diagnostic morphologique complet, shampooing traitant aux huiles végétales pures, coupe de précision aux ciseaux japonais et coiffage sculptural.",
    },
    {
      id: "barbe-rituel",
      title: "Taille de Barbe & Rituel Serviette Chaude",
      duration: "40 minutes",
      price: "52 CHF",
      desc: "Dessin des contours à la lame droite, préparation à l'huile d'argan tiède, application de serviette chaude à la vapeur d'eucalyptus et baume hydratant.",
    },
    {
      id: "combo-integral",
      title: "Expérience Intégrale — Cheveux & Barbe",
      duration: "75 minutes",
      price: "110 CHF",
      desc: "Le protocole complet de l'Atelier associant architecture capillaire et soin complet de barbe avec massage crânien décontractant de 15 minutes.",
    },
    {
      id: "soin-vapeur",
      title: "Soin Végétal Profond & Vapeur Botanique",
      duration: "30 minutes",
      price: "45 CHF",
      desc: "Bain d'argile blanche et huiles essentielles bio sous cloche de micro-vapeur pour purifier le cuir chevelu et densifier la fibre.",
    },
  ];

  const timeSlots = ["09:30", "11:00", "14:30", "16:00", "17:45", "19:00"];

  const handleBook = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
    }, 4000);
  };

  const currentServiceObj = services.find((s) => s.id === selectedService) || services[0];

  return (
    <div className="w-full bg-[#FFFFFF] text-[#000000] font-instrument selection:bg-[#000000] selection:text-[#FFFFFF] pb-20">
      {/* Hairline Minimal Header */}
      <header className="border-b border-[#E5E7EB] px-8 py-7 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-xl sm:text-2xl font-light tracking-[0.25em] uppercase">
            ATELIER KOMA
          </span>
          <span className="hidden sm:inline-block h-3 w-[1px] bg-[#D4D4D8]"></span>
          <span className="hidden sm:inline text-xs text-[#71717A] tracking-widest uppercase">
            Architecture Capillaire & Soin Barbe
          </span>
        </div>

        <div className="flex items-center gap-8 text-xs tracking-widest uppercase text-[#52525B]">
          <span className="hidden md:inline">Rue Centrale 18, 1003 Lausanne</span>
          <a
            href="#reservation"
            className="border-b border-black pb-0.5 text-black hover:text-[#71717A] transition-colors"
          >
            Prendre Rendez-vous
          </a>
        </div>
      </header>

      {/* Hero: Swiss Generous Negative Space & Precision Line Art */}
      <section className="px-8 sm:px-16 pt-20 pb-24 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-mono-code uppercase tracking-[0.3em] text-[#71717A] mb-8">
                Précision • Pureté • Bienveillance
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight leading-[1.08] text-black">
                Une coupe nette.<br />
                Un temps pour soi.<br />
                <span className="font-normal italic">Sans précipitation.</span>
              </h1>
              <p className="mt-8 text-base sm:text-lg text-[#52525B] font-light leading-relaxed max-w-xl">
                À l’Atelier KOMA, nous recevons un seul hôte à la fois dans un espace épuré baigné de lumière naturelle. Chaque geste est mesuré pour respecter la texture naturelle de vos cheveux et la structure de votre visage.
              </p>
            </div>

            {/* Geometric Stylized Scissor & Hairline Precision Graphic */}
            <div className="w-full md:w-72 shrink-0 border border-[#E5E7EB] p-8 flex flex-col items-center justify-center text-center bg-[#FAFAFA]">
              <svg viewBox="0 0 120 120" className="w-28 h-28 stroke-black fill-none mb-6" strokeWidth="1">
                {/* Clean geometric shear concept */}
                <circle cx="35" cy="90" r="14" />
                <circle cx="85" cy="90" r="14" />
                <line x1="45" y1="80" x2="85" y2="25" />
                <line x1="75" y1="80" x2="35" y2="25" />
                <circle cx="60" cy="52" r="2.5" fill="black" />
                <line x1="20" y1="52" x2="100" y2="52" strokeDasharray="2 2" stroke="#A1A1AA" />
              </svg>
              <span className="text-[10px] font-mono-code tracking-[0.2em] text-[#71717A] uppercase">
                Acier Japonais 440C
              </span>
              <span className="text-xs text-black font-light mt-1">
                Aiguisage traditionnel sur pierre
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Strict Swiss Grid Lines */}
      <section className="px-8 sm:px-16 py-20 border-b border-[#E5E7EB] bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-12 pb-4 border-b border-[#E5E7EB]">
            <div>
              <span className="text-[10px] font-mono-code tracking-[0.25em] text-[#71717A] uppercase block">
                01 / Prestations & Tarifs
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight mt-1">
                Le Barème de l&apos;Atelier
              </h2>
            </div>
            <span className="text-xs text-[#71717A]">Tarifs transparents sans supplément</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
            {services.map((item) => {
              const isSelected = selectedService === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedService(item.id)}
                  className={`p-8 bg-white cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected ? "ring-2 ring-black z-10" : "hover:bg-[#FDFDFD]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono-code tracking-wider text-[#71717A] uppercase">
                        {item.duration}
                      </span>
                      <span className="text-lg font-light text-black">
                        {item.price}
                      </span>
                    </div>
                    <h3 className="text-xl font-normal tracking-tight text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#71717A] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F4F4F5] flex items-center justify-between text-xs tracking-wider uppercase">
                    <span className={isSelected ? "text-black font-medium" : "text-[#A1A1AA]"}>
                      {isSelected ? "● Sélectionné pour réservation" : "○ Cliquer pour sélectionner"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Booking Module */}
      <section id="reservation" className="px-8 sm:px-16 py-20 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-[10px] font-mono-code tracking-[0.25em] text-[#71717A] uppercase block">
              02 / Réservation Interactive
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mt-1">
              Choisir votre créneau horaire
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-[#E5E7EB] p-8 bg-[#FFFFFF]">
            {/* Left Selection */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#71717A] mb-3">
                  Prestation retenue
                </label>
                <div className="p-4 border border-[#E5E7EB] bg-[#FBFBFB] flex items-center justify-between">
                  <span className="font-light text-sm">{currentServiceObj.title}</span>
                  <span className="font-mono-code text-xs font-semibold">{currentServiceObj.price}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#71717A] mb-3">
                  Date souhaitée
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Mardi 21 Octobre", "Mercredi 22 Octobre", "Jeudi 23 Octobre"].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`p-3 text-xs border text-center transition-colors cursor-pointer ${
                        selectedDate === d
                          ? "border-black bg-black text-white"
                          : "border-[#E5E7EB] text-[#52525B] hover:border-black"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[#71717A] mb-3">
                  Heure du rendez-vous
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2.5 text-xs font-mono-code border text-center transition-colors cursor-pointer ${
                        selectedSlot === slot
                          ? "border-black bg-black text-white"
                          : "border-[#E5E7EB] text-[#52525B] hover:border-black"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary & Confirmation Button */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#E5E7EB] p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#71717A] mb-4 pb-2 border-b border-[#E5E7EB]">
                  Récapitulatif de votre séance
                </h4>
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">Soin :</span>
                    <span className="text-black font-medium text-right max-w-[180px]">{currentServiceObj.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">Durée estimée :</span>
                    <span className="text-black font-medium">{currentServiceObj.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717A]">Date & Heure :</span>
                    <span className="text-black font-medium">{selectedDate} à {selectedSlot}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-[#E5E7EB]">
                    <span className="text-[#71717A]">Total :</span>
                    <span className="text-base text-black font-light">{currentServiceObj.price}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {bookingConfirmed ? (
                  <div className="bg-black text-white p-3 text-center text-xs tracking-wider uppercase">
                    ✓ Rendez-vous confirmé par SMS & Email
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleBook}
                    className="w-full bg-black hover:bg-[#27272A] text-white py-3.5 text-xs tracking-[0.2em] uppercase font-light transition-colors cursor-pointer"
                  >
                    Confirmer le créneau ({selectedSlot})
                  </button>
                )}
                <span className="block text-[10px] text-center text-[#A1A1AA] mt-2 font-mono-code">
                  Annulation sans frais jusqu&apos;à 4 heures avant
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salon Location & Schedule */}
      <footer className="max-w-5xl mx-auto px-8 sm:px-16 pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light text-[#52525B]">
        <div>
          <h5 className="uppercase tracking-[0.2em] text-black font-normal mb-3">L&apos;Espace KOMA</h5>
          <p className="leading-relaxed">
            18, Rue Centrale<br />
            1003 Lausanne, Suisse<br />
            Métro Riponne — Maurice Béjart
          </p>
        </div>
        <div>
          <h5 className="uppercase tracking-[0.2em] text-black font-normal mb-3">Horaires & Accueil</h5>
          <p className="leading-relaxed">
            Mardi au Vendredi : 09h00 — 19h30<br />
            Samedi : 08h30 — 18h00<br />
            Dimanche & Lundi : Fermé
          </p>
        </div>
        <div>
          <h5 className="uppercase tracking-[0.2em] text-black font-normal mb-3">Contact Direct</h5>
          <p className="leading-relaxed">
            Tél : +41 21 312 88 40<br />
            Email : lausanne@atelierkoma.ch<br />
            Accueil sans attente sur réservation
          </p>
        </div>
      </footer>
    </div>
  );
}
